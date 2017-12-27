import { combineReducers } from 'redux'

import city from './cityReducer'
import detail from './detailReducer'
import home from './homeReducer'
import wrap from './wrapReducer'

export default combineReducers({
    cities: city,
    orderDetail: detail,
    home,
    wrap
});

//state

//index.js
// {
//     cities: city,
//     orderDetail: detail,
//     home,
//     wrap
// }

//cityReducer.js
//cities

//state=[]
// {
//    []
// }


//detailReducer.js
//orderDetail
//  state={}
// {
//   {}
// }


//homeReducer.js
//home
// {
//   home: {
//       adData:resolveADData,
//       guessULike:resolveULikeData
//   }
// }


//wrapReducer.js
//wrap 即是上面wrap
// {
//   wrap:{
//     userInfo,
//     fetchState
// }
// }
