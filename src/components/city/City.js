import React,{ Component, PropTypes } from 'react'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

//import { getCity } from '../../actions/cityActions'
//import { updateUserInfo } from '../../actions/wrapActions'
import { CityHeader } from "./CityHeader";
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
      //cityContainer.js choiceCity
      //updateUserInfo wrapActions.js

        // this.props.choiceCity({
        //     cityName
        // });
        this.props.choiceCity({
            cityName: cityName
        });
        //console.log(this.props.choiceCity( {cityName} ))
        this.props.history.goBack()
    }

    render(){
        const { history, cities }  = this.props;
        //console.log(this.props.cities);
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

// function mapStateToProps(state) {
//     return{
//         cities:state.cities
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return{
//         getCities: bindActionCreators(getCity, dispatch),
//         choiceCity: bindActionCreators(updateUserInfo, dispatch)
//     }
// }
// //component -- >continer
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// ) (City);

export default City;
