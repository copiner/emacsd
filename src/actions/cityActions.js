export const GET_CITY_DATA = 'GET_CITY_DATA';
export const RESOLVE_CITY_DATA = 'RESOLVE_CITY_DATA';

export function getCity(url) {
    return {
        type: GET_CITY_DATA,
        url
    }
}

//City.js

//  this.props.getCities('/api/cities'); //{type: "GET_CITY_DATA", url: "/api/cities"}

//cityContainer.js   getCities: bindActionCreators(getCity, dispatch)

//cityActions.js
// export function getCity(url) {
//     return {
//         type: GET_CITY_DATA,
//         url
//     }
// }
