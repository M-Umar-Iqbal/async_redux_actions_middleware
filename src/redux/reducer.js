import { FETCHING_FAILED, FETCHING_RESULTS, FETCHING_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    data: [],
    error: false,
    errorMsg:''
}
export default function userDataReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_RESULTS:
    console.log('Reducer ==> fetching user results')
            return {
                ...state,
                isLoading: true

            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            }

        case FETCHING_FAILED:
            return {
                ...state,
                isLoading: false,
                error:true,
                data:[],
                errorMsg: action.payload.errorMessage
            }

        default:
            return state

    }
}