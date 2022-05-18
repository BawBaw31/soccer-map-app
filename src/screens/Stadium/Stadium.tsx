import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Games } from '../../components/games/GamesCarousel'
interface StadiumProps {
    route: any
}

export const Stadium = (props: StadiumProps) => {
    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        const ac = new AbortController()
        setGames([])
        const data = props.route.params.stadium.games
        if (data !== null) {
            Object.values(data).map((game: any) => {
                setGames((oldGames: any) => [...oldGames, game])
            })
        }
        return () => ac.abort()
    }, [])

    return (
        <TitleLayout title="Stadium screen">
            <ScrollView>
                <Games games={games} title={'Stadium : ' + props.route.params.stadium.title} />
            </ScrollView>
        </TitleLayout>
    )
}
