import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Games } from '../../components/games/GamesCarousel'
import { MapButton } from '../../components/mapButton/MapButton'
import { Route } from '@react-navigation/routers'

interface StadiumProps {
    route: Route<'Stadium', { stadium: any }>
}

export const Stadium = (props: StadiumProps) => {
    const [games, setGames] = useState<any[]>([])

    useEffect(() => {
        setGames([])
        const data = props.route.params.stadium?.games
        if (data !== undefined) {
            Object.values(data).map((game: any) => {
                setGames((oldGames: any) => [...oldGames, game])
            })
        }
    }, [])

    return (
        <TitleLayout title="Stadium screen" goBack="Home">
            <ScrollView>
                <Games games={games} title={'Stadium : ' + props.route.params.stadium.title} />
                <MapButton
                    text="Go to the stadium"
                    latitude={props.route.params.stadium.geocode.lat}
                    longitude={props.route.params.stadium.geocode.long}
                />
            </ScrollView>
        </TitleLayout>
    )
}
