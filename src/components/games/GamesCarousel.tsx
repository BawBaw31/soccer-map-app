import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { auth } from '../../firebase/firebase-setup'
import * as Styled from './GamesCarousel.styles'

export const Games: React.FunctionComponent = () => {
    // Carousel config
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
    const SLIDE_WIDTH = Math.round(viewportWidth / 5)
    const ITEM_HORIZONTAL_MARGIN = 16
    const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 4
    const SLIDER_WIDTH = viewportWidth

    const [games, setGames] = useState<any>([])

    useEffect(() => {
        const db = getDatabase()
        const gamesRef = ref(db, 'players/' + auth.currentUser?.uid + '/games')
        const ac = new AbortController()
        onValue(gamesRef, (snapshot) => {
            setGames([])
            snapshot.val().forEach((gameId: string) => {
                const gameRef = ref(db, 'games/' + gameId)
                onValue(gameRef, (snapshot) => {
                    setGames((games: any) => [...games, snapshot.val()])
                })
            })
        })
        return () => ac.abort()
    }, [])

    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log(`item with index ${index} clicked`)
                }}
            >
                <Styled.ItemContainer>
                    <Styled.ItemTitle>{item.name}</Styled.ItemTitle>
                    <Styled.ItemText>{item.date.split(',')[0]}</Styled.ItemText>
                    <Styled.ItemText>{item.date.split(',')[1]}</Styled.ItemText>
                </Styled.ItemContainer>
            </TouchableOpacity>
        )
    }, [])

    return (
        <Styled.GamesContainer>
            <Styled.GamesTitle>My Games</Styled.GamesTitle>
            <Carousel
                sliderWidth={SLIDER_WIDTH}
                sliderHeight={viewportHeight}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                data={games}
                renderItem={renderItem}
            />
        </Styled.GamesContainer>
    )
}
