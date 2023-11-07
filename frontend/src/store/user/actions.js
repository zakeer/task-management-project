import axios from "axios"

export const USER_ACTIONS = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    REGISTER_FAILURE: 'REGISTER_FAILURE',
}
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
        const LOGIN_ENDPOINT = `https://silver-telegram-4p4v4r9x75c99-5000.app.github.dev/login`
        axios
            .post(LOGIN_ENDPOINT, payload)
            .then((response) => {
                console.log(":: LOGIN ::", response.data)
                dispatch(userLoginSuccess(response?.data?.token))
            })
            .catch((error) => {
                console.log(":: LOGIN ERROR ::", error);
                const errorMessage = error?.response?.data?.error || "Internal Error";
                dispatch(userLoginFailure(errorMessage))
            })
    }
}


export const doRegister = (dispatch) => {
    const REGISTER_ENDPOINT = `https://silver-telegram-4p4v4r9x75c99-5000.app.github.dev/register`
    return (registerPayload) => {
        axios
            .post(REGISTER_ENDPOINT, registerPayload)
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