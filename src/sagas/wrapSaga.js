import { put, call, take } from 'redux-saga/effects'

import {
  USERINFO_UPDATE,
  START_FETCH,
  FETCH_ERROR,
  FETCH_END,
  GET_USER_LOCATION
} from '../actions/wrapActions'

import { get } from '../fetchApi/get'

export function* getLocation (url) {
    yield put({type:START_FETCH});
    try {
        return yield call(get, url)
    } catch (err){
        yield put({type:FETCH_ERROR})
    } finally {
        yield put({type:FETCH_END})
    }
}

export function* getLocatioFlow() {
    while(true){
        let request = yield take(GET_USER_LOCATION);
        let response = yield call(getLocation, request.url);
        yield put({ type:USERINFO_UPDATE, data:response.data })
    }
}
