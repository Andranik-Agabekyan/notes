import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import notesReducer from './reducer'

const rootReducer = combineReducers({
    notesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;