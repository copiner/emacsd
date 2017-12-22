//reducers
import {combineReducers} from 'redux'

import {
  USERINFO_UPDATE,
  START_FETCH,
  FETCH_ERROR,
  FETCH_END,
} from '../actions/wrapActions'

const initialState = {};

function userInfo(state = initialState,action) {
    switch (action.type){
        case USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}
//start end error
function fetchState(state='end',action) {
    switch (action.type){
        case START_FETCH:
            return 'start';
        case FETCH_ERROR:
            return 'error';
        case FETCH_END:
            return 'end';
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    userInfo,
    fetchState
});

export default rootReducer
