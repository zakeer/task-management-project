import { createStore, combineReducers } from 'redux'
import userReducer from './user/userReducer'
import categoryReducer from './category/categoryReducer'
import taskReducer from './task/taskReducer'

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    tasks: taskReducer,
})
const appStore = createStore(rootReducer)

/*
State
{
    user: {
        token: null,
        email: null,
        error: '',
        ...previousAuthState,
    },
    category: {
        categories: []
    },
    tasks: {
        taskItems: [],
        isLoading: false,
        hasError: null
    }
}
*/

export default appStore

// <Provider store={appStore}></Provider>

/*
import { createContext } from 'react'
const AppContext = createContext()


<AppContext.Provider value={{}}></AppContext.Provider>
*/
