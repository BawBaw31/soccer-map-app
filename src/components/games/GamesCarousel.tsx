import { onValue, ref } from 'firebase/database'
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { auth, db } from '../../firebase/firebase-setup'
import * as Styled from './GamesCarousel.styles'

export const Games = () => {
    // Carousel config
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
    const SLIDE_WIDTH = Math.round(viewportWidth / 2)
    const ITEM_HORIZONTAL_MARGIN = 16
    const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 4
    const SLIDER_WIDTH = viewportWidth

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

    const renderItem = useCallback(({ item }) => {
        if (!item.id || !item.name || !item.date) return null
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log(`item with index ${item.id} clicked`)
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

    return games.length ? (
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
    ) : (
        <></>
    )
}
