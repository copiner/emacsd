import {put,take,call,fork} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import { get } from '../fetchApi/get'
import * as homeActions from '../actions/homeActions'
import * as wrapActions from '../actions/wrapActions'

//故意的
const delayTime = 0;


export function* getAdData(url) {
    yield put({type:wrapActions.START_FETCH});
    yield  delay(delayTime);//故意的
    try {
        return yield call(get,url);
    } catch (error) {
        yield put({type:wrapActions.FETCH_ERROR})
    }finally {
        yield put({type:wrapActions.FETCH_END})
    }
}

export function* getULikeData(url) {
    yield put({type:wrapActions.START_FETCH});
    yield  delay(delayTime);//故意的
    try {
        return yield call(get,url);
    }catch (err) {
        yield put({type:wrapActions.FETCH_ERROR})
    }finally {
        yield put({type:wrapActions.FETCH_END})
    }
}

export function* getAdDataFlow() {
    while (true){
        let request = yield take(homeActions.GET_AD);
        let response = yield call(getAdData,request.url);
        yield put({type:homeActions.GET_AD_RESULT_DATA,data:response.data})
    }
}

export function* getULikeDataFlow() {
    while(true){
        let request = yield  take(homeActions.GET_U_LIKE);
        let response = yield call(getULikeData,request.url);
        yield put({type:homeActions.GET_U_LIKE_RESULT_DATA,data:response.data})
    }
}
