import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { Games } from '../../components/games/GamesCarousel'
interface StadiumScreenProps {
    route: any
}

export const StadiumScreen = (props: StadiumScreenProps) => {
    const [games, setGames] = useState<any[]>([])
    const [stadium, setStadium] = useState<any>({})

    useEffect(() => {
        const ac = new AbortController()
        try {
            onValue(ref(db, `stadiums/${props.route.params.id}/games`), (snapshot) => {
                setGames([])
                const data = snapshot.val()
                if (data !== null) {
                    Object.values(data).map((game: any) => {
                        setGames((oldGames: any) => [...oldGames, game])
                    })
                }
            })
            onValue(ref(db, `stadiums/${props.route.params.id}`), (snapshot) => {
                const data = snapshot.val()
                setStadium(data)
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => ac.abort()
    }, [])
    return (
        <TitleLayout title="Stadium screen">
            <ScrollView>
                <Games
                    games={games}
                    title={
                        'Games in ' +
                        stadium.address?.city +
                        ' ' +
                        stadium.address?.streetNumber +
                        ' ' +
                        stadium.address?.streetName
                    }
                />
            </ScrollView>
        </TitleLayout>
    )
}
