import { combineReducers } from 'redux'
import wrap from './wrapReducer'
import city from './cityReducer'
import detail from './detailReducer'
import home from './homeReducer'

export default combineReducers({
    wrap,
    home,
    orderDetail: detail,
    cities:city
});
