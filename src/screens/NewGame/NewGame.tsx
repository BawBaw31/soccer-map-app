import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { CustomButton } from '../../components/formField/FormField'
import * as StyledForm from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Colors } from '../../styles'

type DatePickerMode = 'date' | 'time'

export const NewGame = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState<DatePickerMode>('date')

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
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
                    placeholder="My game"
                    placeholderTextColor={Colors.gray}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <CustomButton text="Date" onPress={showDatepicker} />
                <CustomButton text="Time" onPress={showTimepicker} />
                {show && (
                    <DateTimePicker
                        value={date}
                        display="spinner"
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}

                <CustomButton text="Submit" onPress={onSubmit} />
            </>
        </TitleLayout>
    )
}
