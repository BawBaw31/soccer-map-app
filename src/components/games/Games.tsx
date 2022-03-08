import React, { useState, useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Carousel as CarouselStyle } from '../../styles'
import * as Styled from './Games.styles'
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
                sliderWidth={CarouselStyle.SLIDER_WIDTH}
                sliderHeight={CarouselStyle.viewportHeight}
                itemWidth={CarouselStyle.ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                data={carouselItems}
                renderItem={renderItem}
            />
        </Styled.GamesContainer>
    )
}
