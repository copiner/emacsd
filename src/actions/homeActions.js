export const GET_AD = 'GET_AD';
export const GET_AD_RESULT_DATA = 'GET_AD_RESULT_DATA';
export const GET_U_LIKE = 'GET_U_LIKE';
export const GET_U_LIKE_RESULT_DATA = 'GET_U_LIKE_RESULT_DATA';

//homeSaga.js利用 let request = yield take(homeActions.GET_AD);
export function getAd(url) {
    return {
        type: GET_AD,
        url
    }
}

//homeSaga.js利用 //let request = yield take(homeActions.GET_U_LIKE);
export function getLike(url) {
    return{
        type: GET_U_LIKE,
        url
    }
}

//getAd getLike homeReducers.js  内部没有相关情况
