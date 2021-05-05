import { INVITE_REQUEST, INVITE_FAILURE, INVITE_SUCCESS } from "../../utility/types"

const initialState = {
  loading: false,
  invite: "",
  error: ""
 
}

export const invite = (state = initialState, action) => {
  switch (action.type) {
 
    case INVITE_REQUEST: {
      return { 
        ...state, 
        loading: true,
        invite: "",
        error: ""
       }
    }
    case INVITE_SUCCESS: {
      return { 
        ...state, 
        loading: false,
        invite: action.payload,
        error: ""
       }
    }
    case INVITE_FAILURE: {
      return { 
        ...state, 
        loading: false,
        invite: "",
        error: action.payload  
       }
    } 
   
    default: {
      return state
    }
  }
}

export default invite
