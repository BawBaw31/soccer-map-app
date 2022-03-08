import React, { useState, useCallback } from 'react'
import Carousel from 'react-native-snap-carousel'
import { CarouselStyle } from '../../styles'
import * as Styled from './Games.styles'

const exampleItems = [
    {
        name: 'Game 1',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 2',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 3',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 4',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 5',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 6',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 7',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 8',
        date: '07/08/22',
        time: '3:30pm',
    },
    {
        name: 'Game 9',
        date: '07/08/22',
        time: '3:30pm',
    },
]

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [carouselItems] = useState<ItemProps[]>(exampleItems)

    const renderItem = useCallback(({ item }: RenderItemProps) => {
        return (
            <Styled.ItemContainer>
                <Styled.ItemTitle>{item.name}</Styled.ItemTitle>
                <Styled.ItemText>{item.date}</Styled.ItemText>
                <Styled.ItemText>{item.time}</Styled.ItemText>
            </Styled.ItemContainer>
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
                layout={'default'}
                data={carouselItems}
                renderItem={renderItem}
                onSnapToItem={(index: number) => setActiveIndex(index)}
            />
        </Styled.GamesContainer>
    )
}
