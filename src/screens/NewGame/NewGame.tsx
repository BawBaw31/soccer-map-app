import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { get, ref, update } from 'firebase/database'
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { AutocompleteDropdown as CityStadiumAutocomplete } from 'react-native-autocomplete-dropdown'
import Feather from 'react-native-vector-icons/Feather'
import { uid } from 'uid'
import { CustomButton } from '../../components/formField/FormField'
import * as StyledForm from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { auth, db } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'
import { Colors } from '../../styles'
import * as Styled from './NewGame.styles'

Feather.loadFont()

type DatePickerMode = 'date' | 'time'

export const NewGame = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState<DatePickerMode>('date')
    const [suggestionsList, setSuggestionsList] = useState<any[]>([])
    const [selectedItem, setSelectedItem] = useState<any>(null)

    const getSuggestions = useCallback(async (q) => {
        const filterToken = q.toLowerCase()
        if (typeof q !== 'string' || q.length < 3) {
            setSuggestionsList([])
            return
        }

        const data = await get(ref(db, 'stadiums'))

        setSuggestionsList([])
        if (data !== null) {
            Object.values(data.val())
                .filter((item: any) => item.address.streetName.toLowerCase().includes(filterToken))
                .map((suggestion: any) => {
                    const formattedSuggestion = {
                        ...suggestion,
                        title: `${suggestion.address.streetNumber} ${suggestion.address.streetName}, ${suggestion.address.city}`,
                    }
                    setSuggestionsList((suggestion: any) => [...suggestion, formattedSuggestion])
                })
        }
    }, [])

    const onChange = (event: Event, selectedDate?: Date) => {
        setShow(false)
        selectedDate && setDate(selectedDate)
    }

    const showMode = (currentMode: DatePickerMode | undefined) => {
        setShow(true)
        currentMode && setMode(currentMode)
    }

    const showDatepicker = () => {
        showMode('date')
    }

    const showTimepicker = () => {
        showMode('time')
    }

    const onSubmit = async () => {
        if (auth.currentUser) {
            const uuid = uid()
            const updatedData: any = {}
            updatedData[`games/${uuid}`] = {
                id: uuid,
                name: name,
                date: `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`,
                players: {
                    [auth.currentUser?.uid]: {
                        id: auth.currentUser?.uid,
                        name: auth.currentUser?.displayName,
                    },
                },
                stadium: selectedItem,
            }
            updatedData[`players/${auth.currentUser?.uid}/games/${uuid}`] = {
                id: uuid,
                name: name,
                date: `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`,
                stadium: selectedItem,
            }
            try {
                await update(ref(db), updatedData)
                navigation.navigate('Home')
            } catch (e) {
                console.log('Error updating data : ' + e)
            }
        } else {
            navigation.navigate('SignIn')
        }
    }

    return (
        <TitleLayout title="New Game">
            <ScrollView>
                <StyledForm.CustomTextInput
                    placeholder="Name of the game"
                    placeholderTextColor={Colors.gray}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Styled.DatePickerContainer>
                    <StyledForm.FormLabel>{date.toLocaleDateString()}</StyledForm.FormLabel>
                    <CustomButton text="Date" onPress={showDatepicker} />
                </Styled.DatePickerContainer>

                <Styled.DatePickerContainer>
                    <StyledForm.FormLabel>
                        {date.toLocaleTimeString([], { timeStyle: 'short' })}
                    </StyledForm.FormLabel>
                    <CustomButton text="Time" onPress={showTimepicker} />
                </Styled.DatePickerContainer>

                {show && (
                    <DateTimePicker
                        value={date}
                        display="spinner"
                        mode={mode}
                        themeVariant="dark"
                        onChange={onChange}
                    />
                )}

                <CityStadiumAutocomplete
                    suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
                    clearOnFocus={false}
                    closeOnBlur={false}
                    closeOnSubmit={false}
                    dataSet={suggestionsList}
                    onChangeText={getSuggestions}
                    onSelectItem={(item) => {
                        item && setSelectedItem(item)
                    }}
                    textInputProps={{
                        placeholder: 'Type the stadium address',
                        autoCorrect: false,
                        autoCapitalize: 'none',
                        style: {
                            borderRadius: 25,
                            backgroundColor: '#383b42',
                            color: '#fff',
                            paddingLeft: 18,
                        },
                    }}
                    rightButtonsContainerStyle={{
                        right: 8,
                        height: 30,
                        alignSelf: 'center',
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#383b42',
                        borderRadius: 25,
                    }}
                    suggestionsListContainerStyle={{
                        backgroundColor: '#fff',
                    }}
                />
                <CustomButton text="Submit" onPress={onSubmit} />
            </ScrollView>
        </TitleLayout>
    )
}
