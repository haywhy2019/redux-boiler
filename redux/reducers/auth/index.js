import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from "../../utility/types"

const initialState = {
  loading: false,
  userData: "",
  error: ""
 
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
 
    case LOGIN_REQUEST: {
      return { 
        ...state, 
        loading: true,
        userData: "",
        error: ""
       }
    }
    case LOGIN_SUCCESS: {
      return { 
        ...state, 
        loading: false,
        userData: action.payload,
        error: ""
       }
    }
    case LOGIN_FAILURE: {
      return { 
        ...state, 
        loading: false,
        userData: "",
        error: action.payload  
       }
    } 
    case LOGOUT: {
      return { 
        ...state, 
        loading: false,
        userData: "",
        error: ""
      }
    }
   
    default: {
      return state
    }
  }
}

export default authReducer
