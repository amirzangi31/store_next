
const initialState = {
    loading : false,
    user : {},
    error : ''
}

const userReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case "FETCH_USER_REQUEST":
          return {
            ...state,
            loading: true,
          };
    
        case "FETCH_USER_SUCCESS":
          return {
            loading: false,
            users: payload,
          };
        case "FETCH_USER_FAILURE":
          return {
            loading: false,
            error: payload,
          };
        default:
          return state;
      }
}



export default userReducer;