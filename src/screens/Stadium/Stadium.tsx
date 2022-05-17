import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { Games } from '../../components/games/GamesCarousel'
interface StadiumProps {
    route: any
}

export const Stadium = (props: StadiumProps) => {
    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        const ac = new AbortController()
        try {
            onValue(ref(db, `stadiums/${props.route.params.stadium.id}/games`), (snapshot) => {
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
        <TitleLayout title="Stadium screen">
            <ScrollView>
                <Games
                    games={games}
                    title={
                        'Stadium : ' +
                        props.route.params.stadium.address?.city +
                        ' ' +
                        props.route.params.stadium.address?.streetNumber +
                        ' ' +
                        props.route.params.stadium.address?.streetName +
                        ' ' +
                        props.route.params.stadium.address?.postalCode
                    }
                />
            </ScrollView>
        </TitleLayout>
    )
}
