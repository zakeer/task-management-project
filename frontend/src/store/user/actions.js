import axios from "axios"
import { saveAuth } from "../../utils/auth"
import { userLogin, userRegister } from "../../services"

export const USER_ACTIONS = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    REGISTER_FAILURE: 'REGISTER_FAILURE',
    LOGOUT: 'USER_LOGOUT',
}

export const userLogout = () => ({
    type: USER_ACTIONS.LOGOUT
})

export const userLoginSuccess = (token) => {
    return {
        type: USER_ACTIONS.LOGIN_SUCCESS,
        payload: { token }
    }
}

export const userLoginFailure = (error) => {
    return {
        type: USER_ACTIONS.LOGIN_FAILURE,
        payload: error
    }
}

// doLogin(dispatch)({username, password})
export const doLogin = (dispatch) => {
    return (payload) => {
        userLogin(payload)
            .then((response) => {
                console.log(":: LOGIN ::", response.data);
                dispatch(userLoginSuccess(response?.data?.token));
                saveAuth(response?.data)
            })
            .catch((error) => {
                console.log(":: LOGIN ERROR ::", error);
                const errorMessage = error?.response?.data?.error || "Internal Error";
                dispatch(userLoginFailure(errorMessage))
            })
    }
}


export const doRegister = (dispatch) => {
    return (registerPayload) => {
        userRegister(registerPayload)
            .then((response) => {
                console.log(":: REGISTER ::", response.data)
                doLogin(dispatch)(registerPayload);
            })
            .catch((error) => {
                console.log(":: REGISTER ::", error);
                const errorMessage = error?.response?.data?.error || "Internal Error";
                dispatch(userLoginFailure(errorMessage))
            })
    }
}


// (dispatch) => (payload) => { axios.post(URL, payload) -> dispatch({}) }