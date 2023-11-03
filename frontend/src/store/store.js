import { createStore } from 'redux';
import userReducer from './user/userReducer';

const appStore = createStore(userReducer);

export default appStore;

// <Provider store={appStore}></Provider>

/*
import { createContext } from 'react'
const AppContext = createContext()


<AppContext.Provider value={{}}></AppContext.Provider>
*/