
import { findIndex } from "lodash";

import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './../constants/ActionTypes';

let tasks = JSON.parse(localStorage.getItem("tasks"));
const initialState = (tasks !== null) ? tasks : [];

const items = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let id = action.item.id;
            let { item } = action;
            if (id === "") {
                id = state.length + 1;
                item = {
                    id,
                    name: item.name,
                    level: +item.level
                }
                state.push(item);
            } else {
                let index = findIndex(state, { id: item.id });
                item = {
                    id,
                    name: item.name,
                    level: +item.level
                }
                state.splice(index, 1, item)
            }
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];

        case EDIT_TODO:
            return [...state];

        case DELETE_TODO:
            state = state.filter(item => item.id !== action.id)
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];

        default:
            return state
    }
}

export default items