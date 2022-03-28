import React from 'react'
import { signOut } from 'firebase/auth'
import { Map } from '../../components/map/Map'
import { Games } from '../../components/games/GamesCarousel'
import { FullWidthButton } from '../../components/fullWidthButton/FullWidthButton'
import { Button } from 'react-native'
import { MainLayout } from '../../components/layouts/Layouts'
import { auth } from '../../firebase/firebase-setup'

export const Home: React.FunctionComponent = () => {
    const Logout = () => {
        signOut(auth)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const onPress = () => {
        console.log('Button clicked !')
    }

    return (
        <MainLayout>
            <Games />
            <FullWidthButton text="ADD A STADIUM" onPress={onPress} />
            <Map />
            <Button title="Logout" onPress={Logout} />
        </MainLayout>
    )
}
