import { getAuthDetails } from '../../utils/auth'
import { USER_ACTIONS } from './actions'

const previousAuthState = getAuthDetails()

const userInitialState = {
    token: null,
    email: null,
    error: '',
    ...previousAuthState,
}

export default function userReducer(state = userInitialState, action) {
    const { type, payload } = action || {}
    console.log(':: userReducer INVOKED ::', { state, action })

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
                error: payload,
            }
        case USER_ACTIONS.LOGOUT:
            return {
                ...state,
                token: null,
                error: null,
            }
        default:
            return state
    }
}
