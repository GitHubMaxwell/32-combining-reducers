import {createStore} from 'redux'
import reducer from '../reducer/category-reducer.js'
export default () => createStore(reducer)