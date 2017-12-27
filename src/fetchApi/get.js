import axios from 'axios'

export function get(url, params = '') {
    if (params)
        //console.log(params) //{id: "568"}
        return axios(url);

    return axios(url, { params: params })
}
