import { call, put ,take } from 'redux-saga/effects'
import * as wrapActions from '../actions/wrapActions'
import * as cityActions from '../actions/cityActions'
import { get } from '../fetchApi/get'

export function* getCities (url) {
    yield put({type:wrapActions.START_FETCH});
    try {
        return yield call(get,url)
    }catch (err){
        yield put({ type:wrapActions.FETCH_ERROR });
    }finally {
        yield put({ type:wrapActions.FETCH_END });
    }
}

export function* getCitiesFlow(){
    while(true){
        let req = yield take(cityActions.GET_CITY_DATA);
        let res = yield call(getCities, req.url);
        yield put({type:cityActions.RESOLVE_CITY_DATA, data:res.data})
    }
}
