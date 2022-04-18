import React from 'react'
import { FullWidthButton } from '../../components/fullWidthButton/FullWidthButton'
import { Games } from '../../components/games/GamesCarousel'
import { SearchLayout } from '../../components/layouts/Layouts'
import { Map } from '../../components/map/Map'

export const Home = () => {
    const onPress = () => {
        console.log('Button clicked !')
    }

    return (
        <SearchLayout>
            <>
                <Games />
                <FullWidthButton text="ADD A STADIUM" onPress={onPress} />
                <Map />
            </>
        </SearchLayout>
    )
}
