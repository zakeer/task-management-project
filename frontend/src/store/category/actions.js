import { createNewCategory, fetchCategories } from '../../services'

export const ACTIONS = {
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
}

const loadCategories = (data = []) => {
    return {
        type: ACTIONS.FETCH_CATEGORIES_SUCCESS,
        payload: data,
    }
}

export const getAllCategories = dispatch => {
    return async () => {
        try {
            const { data } = await fetchCategories()
            console.log(':: getAllCategories ::', data)
            dispatch(loadCategories(data))
        } catch (error) {
            console.log(':: getAllCategories ERROR ::', error)
        }
    }
}

export const createCategory = dispatch => {
    return async name => {
        try {
            const { data } = await createNewCategory({ name })
            console.log(':: createCategory ::', data)
        } catch (error) {}
    }
}