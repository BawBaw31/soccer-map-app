import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { RouteParams } from '../../navigation/RootNavigator'
import * as Styled from './GamesCarousel.styles'

interface GamesProps {
    games: any[]
    title: string
}

export const Games = (props: GamesProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()

    // Carousel config
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
    const SLIDE_WIDTH = Math.round(viewportWidth / 2)
    const ITEM_HORIZONTAL_MARGIN = 16
    const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 4
    const SLIDER_WIDTH = viewportWidth

    const renderItem = useCallback(({ item }) => {
        if (!item.id || !item.name || !item.date) return null
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Game', { id: item.id })
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

    return props.games.length ? (
        <Styled.GamesContainer>
            <Styled.GamesTitle>{props.title}</Styled.GamesTitle>
            <Carousel
                sliderWidth={SLIDER_WIDTH}
                sliderHeight={viewportHeight}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                data={props.games}
                renderItem={renderItem}
            />
        </Styled.GamesContainer>
    ) : (
        <></>
    )
}
