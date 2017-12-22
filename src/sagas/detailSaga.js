import {put,take,call,fork} from 'redux-saga/effects'
import * as wrapActions from '../actions/wrapActions'
import * as detailActions from '../actions/detailActions'
import { get } from '../fetchApi/get'

export function* getDetail(url,data) {
    yield put({ type:wrapActions.START_FETCH });
    try {
        return yield call(get,url,data)
    }catch (err){
        yield put({ type:wrapActions.FETCH_ERROR });
    }finally {
        yield put({ type:wrapActions.FETCH_END });
    }
}

export function* getDetailFolw() {
    while(true){
        let request = yield take(detailActions.GET_ORDER_DETAIL);
        let response = yield call(getDetail, request.url,request.data);
        yield put({type: detailActions.RESOLVE_ORDER_DETAIL_DATA, data:response.data})
    }
}
