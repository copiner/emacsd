export const USERINFO_UPDATE = 'USERINFO_UPDATE';
export const START_FETCH = 'START_FETCH';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_END = 'FETCH_END';
export const GET_USER_LOCATION = 'GET_USER_LOCATION';

export function updateUserInfo(data) {
    return {
        type: USERINFO_UPDATE,
        data
    }
}

export function startFetch() {
    return {
        type: START_FETCH
    }
}

export function fetchError() {
    return {
        type:FETCH_ERROR
    }
}

export function getUserLocation(url) {
    return {
        type:GET_USER_LOCATION,
        url
    }
}
