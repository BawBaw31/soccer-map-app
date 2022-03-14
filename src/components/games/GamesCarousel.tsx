import React, { useState, useCallback } from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import * as Styled from './GamesCarousel.styles'
import gamesFixture from '../../fixtures/games-fixture.json'

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
    const [carouselItems] = useState<ItemProps[]>(gamesFixture)

    // Carousel config
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
    const SLIDE_WIDTH = Math.round(viewportWidth / 5)
    const ITEM_HORIZONTAL_MARGIN = 16
    const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 4
    const SLIDER_WIDTH = viewportWidth

    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log(`item with index ${index} clicked`)
                }}
            >
                <Styled.ItemContainer>
                    <Styled.ItemTitle>{item.name}</Styled.ItemTitle>
                    <Styled.ItemText>{item.date}</Styled.ItemText>
                    <Styled.ItemText>{item.time}</Styled.ItemText>
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
                data={carouselItems}
                renderItem={renderItem}
            />
        </Styled.GamesContainer>
    )
}
