import React, { useState } from 'react'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { CustomButton } from '../../components/formField/FormField'
import * as StyledForm from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Colors } from '../../styles'
import { StyleSheet, View, Text } from 'react-native'

type DatePickerMode = 'date' | 'time'

export const NewGame = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState<DatePickerMode>('date')

    const onChange = (event: Event, selectedDate?: Date) => {
        setShow(false)
        selectedDate && setDate(selectedDate)
    }

    const onSubmit = () => {
        console.log('Button clicked !')
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

    return (
        <TitleLayout title="New Game">
            <>
                <StyledForm.CustomTextInput
                    placeholder="Name of the game"
                    placeholderTextColor={Colors.gray}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.date}>{date.toLocaleString()}</Text>
                <View style={styles.datePickerContainer}>
                    <CustomButton text="Date" onPress={showDatepicker} />
                    <CustomButton text="Time" onPress={showTimepicker} />
                </View>
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

const styles = StyleSheet.create({
    datePickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 16,
    },
    date: { textAlign: 'center', margin: 16, color: Colors.white },
})
