import { USER_ACTIONS } from "./actions";

const userInitialState = {
    token: null,
    email: null,
    error: 'SOMETHING HAPPEND FROM THE CLIENT'
}

export default function userReducer(state = userInitialState, action) {
    const { type, payload } = action || {};
    console.log(":: userReducer INVOKED ::", { state, action })

    switch (type) {
        case USER_ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                token: payload.token,
            }
        case USER_ACTIONS.LOGIN_FAILURE:
        case USER_ACTIONS.REGISTER_FAILURE:
            return {
                ...state,
                token: null,
                error: payload
            }
        default:
            return state;
    }
}
