
import { OPEN_FORM, CLOSE_FORM, TOGGLE_FORM } from './../constants/ActionTypes';

const initialState = false;

const isShow = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FORM:
            return true

        case CLOSE_FORM:
            return false

        case TOGGLE_FORM: 
            return !state

        default:
            return state
    }
}

export default isShow