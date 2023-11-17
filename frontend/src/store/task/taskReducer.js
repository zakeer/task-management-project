import { ACTIONS } from "./actions.js";

const initialState = {
    taskItems: [],
    isLoading: false,
    hasError: null,
    isNewTaskAdded: false,
    isTaskUpdated : false,
    isTaskDeleted : false
}

export default function taskReducer(state = initialState, action) {
    console.log(":: INVOKING taskReducer ::", { state, action });
    const { type, payload } = action || {};
    switch (type) {
        case ACTIONS.FETCH_TASK_LIST:
            return {
                taskItems: [],
                isLoading: true,
                hasError: null,
                
            }
        case ACTIONS.FETCH_TASK_LIST_SUCCESS:
            return {
                taskItems: payload,
                isLoading: false,
                hasError: null,
            }
        case ACTIONS.FETCH_TASK_LIST_FAILURE:
            return {
                taskItems: [],
                isLoading: false,
                hasError: payload
            }

        case ACTIONS.ADD_TASK:
            return {
                ...state,
                isLoading: true,
                isNewTaskAdded: false,
                hasError: null
            }

        case ACTIONS.ADD_TASK_SUCCESS:
            return {
                ...state,
                isNewTaskAdded: true,
                isLoading: false,
                hasError: null
            }

        case ACTIONS.ADD_TASK_FAILURE: {
            return {
                ...state,
                isNewTaskAdded: false,
                isLoading: false,
                hasError: payload
            }
        }

        case ACTIONS.CLEAR_ADD_TASK: {
            return {
                ...state,
                isNewTaskAdded: false,
                isLoading: false,
                hasError: null
            }
        }

        case ACTIONS.UPDATE_TASK_SUCCESS : {
            return {
                ...state,
                isTaskUpdated : true,
                hasError : null,
            }
        }

        case ACTIONS.UPDATE_TASK_FAILURE : {
            return {
                ...state,
                isTaskUpdated : false,
                hasError : payload
            }
        }

        case ACTIONS.DELETE_TASK_SUCCESS : {
             return {
                ...state,
                isTaskDeleted :true,
                hasError : null
             }

        }

        case ACTIONS.DELETE_TASK_FAILURE : {
            return {
                ...state,
                isTaskDeleted : false,
                hasError : payload,
            }
        }

        default:
            return state;
    }
}

