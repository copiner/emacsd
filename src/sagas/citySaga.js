import { call, put ,take } from 'redux-saga/effects'
import * as wrapActions from '../actions/wrapActions'
import * as cityActions from '../actions/cityActions'
import { get } from '../fetchApi/get'

export function* getCities (url) {
    yield put({ type: wrapActions.START_FETCH });
    try {
        let data = yield call(get, url);
        return data
    } catch (err){
        yield put({ type: wrapActions.FETCH_ERROR });
    } finally {
        yield put({ type: wrapActions.FETCH_END });
    }
}

export function* getCitiesFlow(){
    while(true){
        let req = yield take(cityActions.GET_CITY_DATA);
        //take(pattern):

        //If it is a String,
        //the action is matched if "action.type === pattern"
        //console.log(req);//{type: "GET_CITY_DATA", url: "/api/cities"}
        let res = yield call(getCities, req.url);
        //console.log(res);
        yield put({type:cityActions.RESOLVE_CITY_DATA, data:res.data})
    }
}
