import { bindActionCreators } from 'redux'
//bindActionCreators
//Turns an object whose values are action creators, into an object with the same keys, but with
//every action creator wrapped into a dispatch call so they may be invoked directly.

//bindActionCreators(getCity, dispatch).getCity === dispatch(getCity)

import { connect } from 'react-redux'
import City from '../components/city/City'
import { getCity } from '../actions/cityActions'
import { updateUserInfo } from '../actions/wrapActions'



function mapStateToProps(state) {
    return{
        cities: state.cities
    }
}

//bindActionCreators(getCity, dispatch).getCity === dispatch(getCity)
function mapDispatchToProps(dispatch) {
    return{
        getCities: bindActionCreators(getCity, dispatch),
        choiceCity: bindActionCreators(updateUserInfo, dispatch)
    }
}
//component -- >continer
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (City);
