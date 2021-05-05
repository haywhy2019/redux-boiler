import { GET_SUPERUSER_COMPANY_REQUEST, GET_SUPERUSER_COMPANY_FAILURE, GET_SUPERUSER_COMPANY_SUCCESS  } from "../../utility/types"

const initialState = {
  loading: false,
  companyList: "",
  error: ""
 
}

export const companyList = (state = initialState, action) => {
  switch (action.type) {
 
    case GET_SUPERUSER_COMPANY_REQUEST: {
      return { 
        ...state, 
        loading: true,
        companyList: "",
        error: ""
       }
    }
    case  GET_SUPERUSER_COMPANY_SUCCESS: {
      return { 
        ...state, 
        loading: false,
        companyList: action.payload,
        error: ""
       }
    }
    case GET_SUPERUSER_COMPANY_FAILURE: {
      return { 
        ...state, 
        loading: false,
        companyList: "",
        error: action.payload  
       }
    } 
   
    default: {
      return state
    }
  }
}

export default companyList
