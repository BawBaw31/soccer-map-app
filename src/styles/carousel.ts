import { Dimensions } from 'react-native'

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
export const SLIDE_WIDTH = Math.round(viewportWidth / 5)
export const ITEM_HORIZONTAL_MARGIN = 16
export const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 4
export const SLIDER_WIDTH = viewportWidth
