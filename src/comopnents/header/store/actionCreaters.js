import { constant } from './index'

export const getSearchFocusAction = () => ({
  type: constant.SEARCH_FOCUS
})

export const getSearchBlurAction = () => ({
  type: constant.SEARCH_BLUR
})
