import { off, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Games } from '../../components/games/GamesCarousel'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Map } from '../../components/map/Map'
import { auth, db } from '../../firebase/firebase-setup'

export const Home = () => {
    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        try {
            onValue(ref(db, `players/${auth.currentUser?.uid}/games`), (snapshot) => {
                setGames([])
                const data = snapshot.val()
                if (data !== null) {
                    Object.values(data).map((game: any) => {
                        setGames((oldGames: any) => [...oldGames, game])
                    })
                }
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => off(ref(db, `players/${auth.currentUser?.uid}/games`))
    }, [])

    return (
        <TitleLayout title="Soccer Map">
            <ScrollView>
                <Games games={games} title="My games" />
                <Map />
            </ScrollView>
        </TitleLayout>
    )
}
