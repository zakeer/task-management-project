import { ACTIONS } from "./actions";

const initialState = {
    categories: []
}

export default function categoryReducer(state = initialState, action) {
    console.log(":: INVOKING categoryReducer ::", {state, action});
    const { type, payload } = action || {};
    switch (type) {
        case ACTIONS.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}

