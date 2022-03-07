import React from 'react'
import { signOut } from 'firebase/auth'
import { Map } from '../../components/map/Map'
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

    return (
        <MainLayout>
            <Map />
            <Button title="Logout" onPress={Logout} />
        </MainLayout>
    )
}
