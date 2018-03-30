
import { ITEM_SELECTED, ITEM_UNSELECTED } from './../constants/ActionTypes';


const initialState = {
    id: "",
    name: "",
    level: 0
}

const items = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_SELECTED:
            return action.item
        case ITEM_UNSELECTED:
            return initialState
        default:
            return state
    }
}

export default items