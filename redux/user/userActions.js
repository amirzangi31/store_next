import axios from "axios"

const fetchUserRequest = () =>{
    return {
        type : "FETCH_USER_REQUEST"
    }
}
const fetchUserSuccess = user =>{
    return {
        type : "FETCH_USER_SUCCESS",
        payload : user
    }
}
const fetchUserFailure = error =>{
    return {
        type : "FETCH_USER_FAILURE",
        payload : error
    }
}


const fetchUser = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequest())
        axios.get("http://localhost:3000/api/user")
        .then(response => {
            dispatch(fetchUserSuccess(response.data.data))
        }).catch(err => {
            const error = err.message
            dispatch(fetchUserFailure(error))
        })
    }
}

export default fetchUser;