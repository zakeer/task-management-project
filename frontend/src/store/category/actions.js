import { createNewCategory, fetchCategories } from "../../services";

export const ACTIONS = {
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILURE: 'FETCH_CATEGORIES_FAILURE',
    CREATE_CATEGORY_SUCCESS : 'CREATE_CATEGORY_SUCCESS',
    CREATE_CATEGORY_FAILURE : 'CREATE_CATEGORY_FAILURE',
    CLEAR_ADD_CATEGORY  : 'CLEAR_ADD_CATEGORY ',
    
};


const loadCategories = (data = []) => {
    return {
        type: ACTIONS.FETCH_CATEGORIES_SUCCESS,
        payload: data
    }
}
const fetchCategoryList = () => ({ type: ACTIONS.FETCH_CATEGORIES })
const loadCategoriesFailure = (error = "SOMETHING WENT WRONG") => ({ type:ACTIONS.FETCH_CATEGORIES_FAILURE, payload:error })
const createCategorySuccess = () => ({ type:ACTIONS.CREATE_CATEGORY_SUCCESS })
const createCategoryFailure = (error = "SOMETHING WENT WRONG") => ({ type:ACTIONS.CREATE_CATEGORY_FAILURE, payload:error})
const clearAddCategory = () => ({ type: ACTIONS.CLEAR_ADD_CATEGORY });



export const getAllCategories = (dispatch) => {
    return async () => {
        try {
            dispatch(fetchCategoryList())
            const { data } = await fetchCategories();
            dispatch(loadCategories(data));
        } catch (error) {
            const errorMessage = error?.response?.data?.error
            dispatch(loadCategoriesFailure(errorMessage))
        }
    }
}

export const createCategory = (dispatch) => {
    return async (name) => {
        try {
            const { data } = await createNewCategory({ name });
            dispatch(createCategorySuccess());
            console.log(data, "From createCategory -> action.js")
            setTimeout(() => {
                dispatch(clearAddCategory())
            }, 3000)
        } catch (error) {
            const errorMessage = error?.response?.data?.error
           dispatch(createCategoryFailure(errorMessage))
        }
    }
}

