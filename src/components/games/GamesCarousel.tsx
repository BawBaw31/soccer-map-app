import React, { useState, useCallback, useEffect } from 'react'
import { TouchableOpacity, Dimensions, Text } from 'react-native'
import { getDatabase, ref, onValue } from 'firebase/database'
import Carousel from 'react-native-snap-carousel'
import * as Styled from './GamesCarousel.styles'
import { auth } from '../../firebase/firebase-setup'

interface ItemProps {
    name: string
    date: string
    time: string
}

interface RenderItemProps {
    item: ItemProps
    index: number
}

export const Games: React.FunctionComponent = () => {
    const [carouselItems, setCarouselItems] = useState<any>([])
    const db = getDatabase()

    // Carousel config
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
    const SLIDE_WIDTH = Math.round(viewportWidth / 5)
    const ITEM_HORIZONTAL_MARGIN = 16
    const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 4
    const SLIDER_WIDTH = viewportWidth

    useEffect(() => {
        if (auth.currentUser) {
            const gamesRef = ref(db, 'players/' + auth.currentUser.uid + '/games')
            onValue(gamesRef, (snapshot) => {
                setCarouselItems([])
                if (snapshot.val()) {
                    snapshot.val().forEach((id: string) => {
                        const game = ref(db, 'games/' + id)
                        onValue(game, (snapshot) => {
                            setCarouselItems((items: any) => [...items, snapshot.val()])
                        })
                    })
                }
            })
        }
    }, [])

    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
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
            {carouselItems.length ? (
                <Carousel
                    sliderWidth={SLIDER_WIDTH}
                    sliderHeight={viewportHeight}
                    itemWidth={ITEM_WIDTH}
                    activeSlideAlignment={'start'}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    data={carouselItems}
                    renderItem={renderItem}
                />
            ) : (
                <Text>You have no games comming</Text>
            )}
        </Styled.GamesContainer>
    )
}
