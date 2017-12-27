
import { RESOLVE_ORDER_DETAIL_DATA } from '../actions/detailActions'
export default function orderDetail(state={}, action) {
    switch (action.type){
        case RESOLVE_ORDER_DETAIL_DATA:
            //console.log(action.data);//{imgs: Array(5), recommends: Array(3), orderDetail: {…}}
            //date get from '/api/orderDetail' from serverDAta/resDAta.js
            return action.data;
        default:
            return state
    }
}
