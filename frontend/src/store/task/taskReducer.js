import { ACTIONS } from "./actions.js";

const initialState = {
    taskItems: [],
    isLoading: false,
    hasError: null
}

export default function taskReducer(state = initialState, action) {
    console.log(":: INVOKING taskReducer ::", { state, action });
    const { type, payload } = action || {};
    switch (type) {
        case ACTIONS.FETCH_TASK_LIST:
            return {
                taskItems: [],
                isLoading: true,
                hasError: null
            }
        case ACTIONS.FETCH_TASK_LIST_SUCCESS:
            return {
                taskItems: payload,
                isLoading: false,
                hasError: null
            }
        case ACTIONS.FETCH_TASK_LIST_FAILURE:
            return {
                taskItems: [],
                isLoading: false,
                hasError: payload
            }
        default:
            return state
    }
}

