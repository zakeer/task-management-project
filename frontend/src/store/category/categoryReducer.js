import { ACTIONS } from "./actions";

const initialState = {
    categories: [],
    isLoading : false,
    hasError : null,
    isCategoryAdded : false
}

export default function categoryReducer(state = initialState, action) {
    console.log(":: INVOKING categoryReducer ::", {state, action});
    const { type, payload } = action || {};
    switch (type) {

        case ACTIONS.FETCH_CATEGORIES : 
        return {
            ...state,
            categories: [],
            isLoading:true,
            hasError:null
        }

        case ACTIONS.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading:false,
                hasError:null
            }
        
            case ACTIONS.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                isCategoryAdded:true,
            }
            case ACTIONS.FETCH_CATEGORIES_FAILURE:
                case ACTIONS.CREATE_CATEGORY_FAILURE:
                return {
                    ...state,
                    categories: [],
                    hasError : payload,
                    isCategoryAdded:false
                }
             case ACTIONS.CLEAR_ADD_CATEGORY: {
                return {
                    ...state,
                    isCategoryAdded: false,
                    isLoading: false,
                    hasError: null
                }
            }
        default:
            return state
    }
}

