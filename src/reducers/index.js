import { combineReducers } from 'redux'
import isShow from './isShow'
import items from './items'
import sort from './sort'
import search from './search'
import itemSelected from './itemSelected'

const rootReducer = combineReducers({
    items,
    sort,
    search,
    itemSelected,
    isShow
})

export default rootReducer