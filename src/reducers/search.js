
import { SEARCH_ITEM } from './../constants/ActionTypes';

const initialState = "";

const search = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ITEM:
            state = action.search;
            return state 

        default:
            return state
    }
}

export default search