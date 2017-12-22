import React,{Component,PropTypes} from 'react'
import { getCity } from '../../actions/cityActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CityHeader } from "./CityHeader";
import { updateUserInfo } from '../../actions/wrapActions'
import style from './css/style.css'

class City extends Component{
    constructor(props){
        super(props);
        this.choiceCity = this.choiceCity.bind(this)
    }

    componentDidMount() {
        this.props.getCities('/api/cities');//{type: "GET_CITY_DATA", url: "/api/cities"}
    }

    choiceCity(cityName){
        this.props.choiceCity({
            cityName
        });
        this.props.history.goBack()
    }

    render(){
        const { history, cities }  = this.props;
        console.log(this.props);
        return(
            <div className={style.container}>
                <CityHeader history={history}/>
                <div className={style.gpsCity}>
                    <span>北京</span>
                    GPS定位
                </div>
                <p className={style.hotCity}>热门城市</p>
                <div className={style.hotCityContainer}>
                    {cities.map((item,index)=>{
                        return (
                            <div key={index} className={style.hotCityName} onClick={()=>this.choiceCity(item.name)}>
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

City.defaultProps = {
    cities:[]
};

City.propTypes = {
    cities:PropTypes.arrayOf(PropTypes.object.isRequired)
};

function mapStateToProps(state) {
    return{
        cities:state.cities
    }
}
//Turns an object whose values are action creators, into an object with the same keys, but with
//every action creator wrapped into a dispatch call so they may be invoked directly.

//bindActionCreators(getCity, dispatch).getCity === dispatch(getCity)
function mapDispatchToProps(dispatch) {
    return{
        getCities: bindActionCreators(getCity, dispatch),
        choiceCity: bindActionCreators(updateUserInfo, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (City);
