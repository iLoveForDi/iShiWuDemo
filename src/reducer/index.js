import { combineReducers } from 'redux'
import home from './home'
 import homeDetail from './homeDetail'                
module.exports = combineReducers({
    home:home,
    homeDetail:homeDetail
})