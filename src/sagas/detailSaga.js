import {put,take,call,fork} from 'redux-saga/effects'
import * as wrapActions from '../actions/wrapActions'
import * as detailActions from '../actions/detailActions'
import { get } from '../fetchApi/get'

export function* getDetail(url,data) {
    yield put({ type: wrapActions.START_FETCH });
    try {
        return yield call(get, url, data)// fetchApi/get.js
    } catch (err){
        yield put({ type: wrapActions.FETCH_ERROR });
    } finally {
        yield put({ type: wrapActions.FETCH_END });
    }
}

export function* getDetailFolw() {
    while(true){
        let request = yield take(detailActions.GET_ORDER_DETAIL);
        //console.log(request);
        // {
        //   type: "GET_ORDER_DETAIL",
        //   url: "/api/orderDetail",
        //   data: {
        //     {id: "209"}
        //   }
        // }
        let response = yield call(getDetail, request.url, request.data);
        //console.log(response);
        //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
        // data:{imgs: Array(5), recommends: Array(3), orderDetail: {…}}
        let orderDetail = yield put({type: detailActions.RESOLVE_ORDER_DETAIL_DATA, data: response.data})
        //console.log(orderDetail);
        //{imgs: Array(5), recommends: Array(3), orderDetail: {…}}



        //date get from '/api/orderDetail' from serverDAta/resDAta.js

        //detailReducer.js ---> function orderDetail(state={}, action) {...}

    }
}
