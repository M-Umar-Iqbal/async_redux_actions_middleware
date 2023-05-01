import axios from 'axios'
import { FETCHING_FAILED, FETCHING_RESULTS, FETCHING_SUCCESS } from "./actionType"

export const fetchUserResult = () => {
    console.log('Action ==> fetching user results')
    return {
        type: FETCHING_RESULTS
    }
}

export const fetchingSuccessFull = (fetchedData) => {
    return {
        type: FETCHING_SUCCESS,
        payload: {
            data: fetchedData
        }
    }
}
export const fetchingFailed = (errorMsg) => {
    return {
        type: FETCHING_FAILED,
        payload: {
            errorMessage: errorMsg
        }
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserResult())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data
            dispatch(fetchingSuccessFull(users))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(fetchingFailed(errorMsg))
        })
    }
}