import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ref, update } from 'firebase/database'
import React, { useState } from 'react'
import { uid } from 'uid'
import { CustomButton } from '../../components/formField/FormField'
import * as StyledForm from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { auth, db } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'
import { Colors } from '../../styles'
import * as Styled from './NewGame.styles'

type DatePickerMode = 'date' | 'time'

export const NewGame = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState<DatePickerMode>('date')

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
            }
            updatedData[`players/${auth.currentUser?.uid}/games/${uuid}`] = {
                id: uuid,
                name: name,
                date: `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`,
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
            <>
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
                <CustomButton text="Submit" onPress={onSubmit} />
            </>
        </TitleLayout>
    )
}
