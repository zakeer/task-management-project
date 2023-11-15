import { createNewTask, deleteTask, getTasksList, updateTask } from "../../services"

export const ACTIONS = {
    FETCH_TASK_LIST: 'FETCH_TASK_LIST',
    FETCH_TASK_LIST_SUCCESS: 'FETCH_TASK_LIST_SUCCESS',
    FETCH_TASK_LIST_FAILURE: 'FETCH_TASK_LIST_FAILURE',

    ADD_TASK: 'ADD_TASK',
    ADD_TASK_SUCCESS: 'ADD_TASK_SUCCESS',
    ADD_TASK_FAILURE: 'ADD_TASK_FAILURE',
    CLEAR_ADD_TASK: 'CLEAR_ADD_TASK',
    UPDATE_TASK_SUCCESS : 'UPDATE_TASK_SUCCESS',
    UPDATE_TASK_FAILURE : 'UPDATE_TASK_FAILURE',
    DELETE_TASK_SUCCESS : 'DELETE_TASK_SUCCESS',
    DELETE_TASK_FAILURE : 'DELETE_TASK_FAILURE',
}

export const clearAddTask = () => ({ type: ACTIONS.CLEAR_ADD_TASK });
export const addingTask = () => ({ type: ACTIONS.ADD_TASK });
export const addingTaskSuccess = () => ({ type: ACTIONS.ADD_TASK_SUCCESS });
export const addingTaskFailure = (error = "SOMETHING WENT WRONG") => ({ type: ACTIONS.ADD_TASK_FAILURE, payload: error });
export const updateTaskFailure = ( error = "SOMETHING WENT WRONG") => ({ type : ACTIONS.UPDATE_TASK_FAILURE, payload: error });
export const deleteTaskSuccess = () => ({ type : ACTIONS.DELETE_TASK_SUCCESS });
export const deleteTaskFailure = () => ({ type : ACTIONS.DELETE_TASK_FAILURE });

export const updateTaskSuccess = (updatedData = {}) => {
    return {
        type : ACTIONS.UPDATE_TASK_SUCCESS,
    }
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
            dispatch(addingTask());
            // API CALL
            const { data } = await createNewTask(newTaskPayload);
            dispatch(addingTaskSuccess());
            setTimeout(() => {
                dispatch(clearAddTask());
            }, 3000)
        } catch (error) {
            const errorMessage = error?.response?.data?.error
            console.log(":: addTask ERRRO ::", { error, errorMessage })
            dispatch(addingTaskFailure(errorMessage));
        }
    }
}


export const handleUpdateTask = (dispatch) => {
  
    return async ( newTaskPayload) => {
        
        try {
          // API CALL
          const { data } = await updateTask(newTaskPayload);
          dispatch(updateTaskSuccess());
          fetchAllTaskList(dispatch)()
          console.log(data, "UPDATE TASK SUCCESS -> actions.js")
        } catch (error) {
            const errorMessage = error?.response?.data?.error
            console.log(":: updateTask ERROR ::", { error, errorMessage })
            dispatch(updateTaskFailure(errorMessage));
        }
    }
}

export const handleDeleteTask = (dispatch) => {
    return async (deleteTaskid) => {
        try {
          // API CALL
          const deleteData = await deleteTask(deleteTaskid);
          dispatch(deleteTaskSuccess());
          fetchAllTaskList(dispatch)()
        } catch (error) {
            const errorMessage = error?.response?.data?.error
            console.log(":: deleteTask ERROR ::", { error, errorMessage })
            dispatch(deleteTaskFailure(errorMessage));
        }
    }
}

