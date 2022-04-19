import React from 'react'
import { ScrollView } from 'react-native'
import { Games } from '../../components/games/GamesCarousel'
import { SearchLayout } from '../../components/layouts/Layouts'
import { Map } from '../../components/map/Map'

export const Home = () => {
    return (
        <SearchLayout>
            <ScrollView>
                <Games />
                <Map />
            </ScrollView>
        </SearchLayout>
    )
}
