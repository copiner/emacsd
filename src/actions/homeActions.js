export const GET_AD = 'GET_AD';
export const GET_AD_RESULT_DATA = 'GET_AD_RESULT_DATA';
export const GET_U_LIKE = 'GET_U_LIKE';
export const GET_U_LIKE_RESULT_DATA = 'GET_U_LIKE_RESULT_DATA';

export function getAd(url) {
    return {
        type:GET_AD,
        url
    }
}

export function getLike(url) {
    return{
        type:GET_U_LIKE,
        url
    }
}
