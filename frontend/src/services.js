import axios from "axios";
import { getAuthDetails } from "./utils/auth";

const BASE_API_URL = `https://silver-telegram-4p4v4r9x75c99-5000.app.github.dev`;

const API_ENDPOINTS = {
    LOGIN: `${BASE_API_URL}/login`,
    REGISTER: `${BASE_API_URL}/register`,

    GET_TASKS_LIST: `${BASE_API_URL}/tasks`,

    ADD_CATEGORY: `${BASE_API_URL}/addNewCategory`,
    GET_CATEGORIES: `${BASE_API_URL}/categories`,
}

export const userLogin = (payload) => {
    return axios.post(API_ENDPOINTS.LOGIN, payload)
}

export const userRegister = (payload) => {
    return axios.post(API_ENDPOINTS.REGISTER, payload)
}


export const createNewCategory = (payload) => {
    return axios.post(API_ENDPOINTS.ADD_CATEGORY, payload)
}

export const fetchCategories = () => {
    return axios.get(API_ENDPOINTS.GET_CATEGORIES)
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
