import * as types from './../constants/ActionTypes'

export const openForm = () => ({ type: types.OPEN_FORM })
export const closeForm = () => ({ type: types.CLOSE_FORM })
export const toggleForm = () => ({ type: types.TOGGLE_FORM})
export const addTodo = item => ({ type: types.ADD_TODO, item })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (item) => ({ type: types.EDIT_TODO, item })
export const sortItem = (orderBy, orderDir) => ({ type: types.SORT_ITEM, orderBy, orderDir })
export const searchItem = (search) => ({ type: types.SEARCH_ITEM, search })
export const itemSelected = (item) => ({ type: types.ITEM_SELECTED, item })
export const itemUnSelected = () => ({ type: types.ITEM_UNSELECTED })