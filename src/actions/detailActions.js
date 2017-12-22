
export const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL';
export const RESOLVE_ORDER_DETAIL_DATA='RESOLVE_ORDER_DETAIL_DATA';

export function getDetail(url,data) {
    return{
        type:GET_ORDER_DETAIL,
        url,
        data
    }
}
