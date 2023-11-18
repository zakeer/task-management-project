import { createNewCategory, fetchCategories, deleteCategoryList, updateCategoryList } from "../../services";

export const ACTIONS = {
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',

    UPDATE_CATEGORY: 'UPDATE_CATEGORY',
};


const loadCategories = (data = []) => {
    return {
        type: ACTIONS.FETCH_CATEGORIES_SUCCESS,
        payload: data
    }
}


export const getAllCategories = (dispatch) => {
    return async () => {
        try {
            const { data } = await fetchCategories();
            console.log(":: getAllCategories ::", data);
            dispatch(loadCategories(data));
        } catch (error) {
            console.log(":: getAllCategories ERROR ::", error)
        }
    }
}

export const createCategory = (dispatch) => {
    return async (name) => {
        try {
            const { data } = await createNewCategory({ name });
            console.log(":: createCategory ::", data);
            
        } catch (error) {

        }
    }
}

export const deleteCategory = (dispatch) => {
    return async (categoryId) => {
        try {
            await deleteCategoryList(categoryId);
          dispatch ({
            type: ACTIONS.DELETE_CATEGORY,
            payload: categoryId,
          })  
        } catch (error) {
            console.log('Error in deleting category', error)
        }
    }
}
