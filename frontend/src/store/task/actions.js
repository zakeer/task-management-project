import { createNewTask, getTasksList } from "../../services"

export const ACTIONS = {
    FETCH_TASK_LIST: 'FETCH_TASK_LIST',
    FETCH_TASK_LIST_SUCCESS: 'FETCH_TASK_LIST_SUCCESS',
    FETCH_TASK_LIST_FAILURE: 'FETCH_TASK_LIST_FAILURE',
}


export const getAllTaskList = () => {
    return {
        type: ACTIONS.FETCH_TASK_LIST
    }
}


export const getAllTaskListSuccess = (lists = []) => {
    return {
        type: ACTIONS.FETCH_TASK_LIST_SUCCESS,
        payload: lists
    }
}

export const getAllTaskListFailure = (error) => {
    return {
        type: ACTIONS.FETCH_TASK_LIST_FAILURE,
        payload: error
    }
}


export const fetchAllTaskList = (dispatch) => {
    return async () => {
        try {
            // Dispatching action for loading 
            dispatch(getAllTaskList());

            // API CALL
            const { data } = await getTasksList();
            console.log(":: fetchAllTaskList ::", data);

            // Dispatching action for uploading task list
            dispatch(getAllTaskListSuccess(data));
        } catch (error) {
            const errorMessage = error?.response?.data?.error
            dispatch(getAllTaskListFailure(errorMessage))
        }
    }
}

export const addTask = (dispatch) => {
    return async (newTaskPayload) => {
        try {
            // API CALL
            const { data } = await createNewTask(newTaskPayload);

        } catch (error) {
            const errorMessage = error?.response?.data?.error
            console.log(":: addTask ERRRO ::", { error, errorMessage })
        }
    }
}

