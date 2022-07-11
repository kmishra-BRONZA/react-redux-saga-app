import types  from "./types";

export function fetchData(data){
    console.log("fetchData data : ", data)
    return {
        type: types.SEND_REQUEST,
        payload: data
    }
}

export const fetchDataSuccess = (user)=> {
    console.log("fetchDataSuccess user data from API : ", user)
    return{
        type: types.SEND_REQUEST_SUCCESS,
        payload: user
    }
}

export const fetchDataFailure = ()=>{
    return{
        type: types.SEND_REQUEST_FAILURE,
        error: error
    }
}
