import axios from "axios"
require('dotenv').config()

export const http = axios.create({
    baseURL: process.env.REACT_APP_URL
})

export const httpHome = axios.create({
    baseURL: process.env.REACT_APP_URL
})


export const privateHttp = axios.create({
    baseURL: process.env.REACT_APP_URL
})

privateHttp.interceptors.request.use((config) => {
    config.headers.Authorization =   `Bearer ${localStorage.getItem("accessToken")}`
    return config
})
