import {
  GET_CITY_DATA,
  RESOLVE_CITY_DATA,
} from '../actions/cityActions'

export default function cities(state=[], action) {
    switch (action.type){
        case RESOLVE_CITY_DATA:
            return action.data;
        default :
            return state;
    }
}
