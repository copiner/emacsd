
import { RESOLVE_ORDER_DETAIL_DATA } from '../actions/detailActions'
export default function orderDetail(state={},action) {
    switch (action.type){
        case RESOLVE_ORDER_DETAIL_DATA:
            return action.data;
        default:
            return state
    }
}
