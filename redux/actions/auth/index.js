// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'
import { Router } from 'react-router'
import { http, privateHttp} from "../../utility/axios"
import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from "../../utility/types"
// const config = useJwt.jwtConfig

export const loginRequest = (data) => {
  return {
    type: LOGIN_REQUEST,
    payload: data
  }
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {}
  }
}


// ** Handle User Login
export const handleLogin = payload => {
  return async dispatch => {
    try {
      dispatch(loginRequest())
      const response = await http({
        url: `/organizations/login/`,
        method: "post",
        data: payload
      })

      const { data } = response
      localStorage.setItem('userData', JSON.stringify(data))
      localStorage.setItem('accessToken', data.access)
      localStorage.setItem('refreshToken', data.refresh)
      dispatch(loginSuccess(data))
    } catch (error) {
      const errorMessage = error.response
      dispatch(loginFailure(errorMessage))
    }
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    localStorage.removeItem('userData')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    dispatch(logout())
  }
}
