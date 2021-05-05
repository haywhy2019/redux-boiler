import { INVITE_REQUEST, INVITE_FAILURE, INVITE_SUCCESS,
  GET_SUPERUSER_COMPANY_REQUEST,
  GET_SUPERUSER_COMPANY_FAILURE,
  GET_SUPERUSER_COMPANY_SUCCESS  } from "../../utility/types"
import { http, privateHttp } from "../../utility/axios"

export const inviteRequest = () => {
  return {
    type: INVITE_REQUEST
  }
}

export const inviteSuccess = (data) => {
  return {
    type: INVITE_SUCCESS,
    payload: data
  }
}

export const inviteFailure = (error) => {
  return {
    type: INVITE_FAILURE,
    payload: error
  }
}

export const superUserCompanyRequest = () => {
  return {
    type: GET_SUPERUSER_COMPANY_REQUEST
  }
}

export const superUserCompanySuccess = (data) => {
  return {
    type: GET_SUPERUSER_COMPANY_SUCCESS,
    payload: data
  }
}

export const superUserCompanyFailure = (error) => {
  return {
    type: GET_SUPERUSER_COMPANY_FAILURE,
    payload: error
  }
}

export const inviteUser = (payload) => {
  return async dispatch => {
    try {
      dispatch(inviteRequest())
      const response = await privateHttp({
        url: `/organizations/admin/invitations/`,
        method: "post",
        data: payload
      })

      const { data } = response
      console.log(response, "res")
      dispatch(inviteSuccess(data))
    } catch (error) {
      const errorMessage = error.response
      console.log(errorMessage, "error")
      dispatch(inviteFailure(errorMessage))
    }
  
  }
}

export const superUserCompany = () => {
  return async dispatch => {
    try {
      dispatch(superUserCompanyRequest())
      const response = await privateHttp({
        url: `/organizations/admin/`,
        method: "get"
      })

      console.log(response, "res")
      const {data} = response
      dispatch(superUserCompanySuccess(data))
    } catch (error) {
      const errorMessage = error.response
      console.log(errorMessage, "error")
      dispatch(superUserCompanyFailure(errorMessage))
    }
  
  }
}