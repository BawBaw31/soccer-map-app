import React from 'react'
import { ScrollView } from 'react-native'
import { Games } from '../../components/games/GamesCarousel'
import { SearchLayout } from '../../components/layouts/Layouts'
import { Map } from '../../components/map/Map'
import { onValue, ref } from 'firebase/database'
import { auth, db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'

export const Home = () => {
    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        const ac = new AbortController()
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
        return () => ac.abort()
    }, [])

    return (
        <SearchLayout>
            <ScrollView>
                <Games games={games} title="My games" />
                <Map />
            </ScrollView>
        </SearchLayout>
    )
}
