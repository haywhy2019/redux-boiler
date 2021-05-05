// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { saveState, loadState } from '../utility/localStorage'

// ** init middleware
const middleware = [thunk, createDebounce(), logger]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ** Create store
const  persistedState = loadState()
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(...middleware)))

console.log(store.getState().auth, "store", persistedState)
console.log("state", persistedState)
store.subscribe(() => {
    saveState({
       auth: store.getState().auth
    })
})

export { store }
