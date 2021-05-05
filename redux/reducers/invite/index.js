import { combineReducers } from "redux"
import {invite} from "./invite"
import {companyList} from "./companyList"

export const addUser = combineReducers({
   invite, companyList
})