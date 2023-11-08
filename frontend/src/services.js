import axios from "axios";
import { getAuthDetails } from "./utils/auth";

const BASE_API_URL = `https://silver-telegram-4p4v4r9x75c99-5000.app.github.dev`;

const API_ENDPOINTS = {
    LOGIN: `${BASE_API_URL}/login`,
    REGISTER: `${BASE_API_URL}/register`,
    GET_TASKS_LIST: `${BASE_API_URL}/tasks`,
}

export const userLogin = (payload) => {
    return axios.post(API_ENDPOINTS.LOGIN, payload)
}

export const userRegister = (payload) => {
    return axios.post(API_ENDPOINTS.REGISTER, payload)
}

export const getTasksList = () => {
    const userAuthDetails = getAuthDetails();
    return axios.get(API_ENDPOINTS.GET_TASKS_LIST, {
        headers: {
            'Authorization': `Basic ${userAuthDetails.token}`,
        }
    });
}

console.log(":: getTasksList ::", getTasksList);
