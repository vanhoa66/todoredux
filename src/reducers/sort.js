
import { SORT_ITEM } from './../constants/ActionTypes';

const initialState = {
    orderBy: "level",
    orderDir: "asc"
};

const sort = (state = initialState, action) => {
    switch (action.type) {
        case SORT_ITEM:
            state = {
                orderBy: action.orderBy,
                orderDir: action.orderDir
            }
            return {...state}

        default:
            return state
    }
}

export default sort