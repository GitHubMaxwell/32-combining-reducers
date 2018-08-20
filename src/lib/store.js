import {createStore} from 'redux'

////////
import rootReducer from '../reducer/root-reducer.js'
// import the combined reducers export from reducer/index.js and change whats passed in to createStore below
// maybe add the Redux Dev Tools
////////

export default () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());