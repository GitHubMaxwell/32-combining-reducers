/*

    export a reducer that holds the entire app state from reducer/index.js
    create a reducer that will combine your categories reducer and expenses reducer

*/
import { combineReducers } from 'redux'
import catReducer from './category-reducer.js'
import expReducer from './expense-reducer.js'

export default combineReducers({
    catReducer,
    expReducer
})