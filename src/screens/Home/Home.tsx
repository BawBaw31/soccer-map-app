import { signOut } from 'firebase/auth'
import React from 'react'
import { Button } from 'react-native'
import { FullWidthButton } from '../../components/fullWidthButton/FullWidthButton'
import { Games } from '../../components/games/GamesCarousel'
import { SearchLayout } from '../../components/layouts/Layouts'
import { Map } from '../../components/map/Map'
import { auth } from '../../firebase/firebase-setup'

export const Home = () => {
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
        <SearchLayout>
            <>
                <Games />
                <FullWidthButton text="ADD A STADIUM" onPress={onPress} />
                <Map />
                <Button title="Logout" onPress={Logout} />
            </>
        </SearchLayout>
    )
}
