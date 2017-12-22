
import {combineReducers} from 'redux'
import {
  GET_AD_RESULT_DATA,
  GET_U_LIKE_RESULT_DATA
} from '../actions/homeActions'

function resolveADData(state=[],action) {
    switch (action.type){
        case GET_AD_RESULT_DATA:
            return action.data;
        default :
            return state
    }
}
function resolveULikeData(state=[],action) {
    switch (action.type){
        case GET_U_LIKE_RESULT_DATA:
            return [...state,...action.data];
        default :
            return state
    }
}

const rootReducer = combineReducers({
    adData:resolveADData,
    guessULike:resolveULikeData
});

export default rootReducer
