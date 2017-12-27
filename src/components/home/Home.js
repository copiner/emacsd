import React, {Component, PropTypes} from 'react'
import HomeHeader from "./homeHeader/HomeHeader";
//import {connect} from 'react-redux'
import Category from "./category/Category";
import style from './css/style.css'
//import {getAd,getLike} from '../../actions/homeActions'
//import {bindActionCreators} from 'redux'
import Ad from "./ad/Ad";
import CheapOrReducers from "./cheapOrReducers/CheapOrReducers";
import GuessULike from "./guessULike/GuessULike";

class Home extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.skipToLocation = this.skipToLocation.bind(this)
    }

    componentDidMount() {
      //init state

      //homeActions.js
        //getAd('/api/getAdData') { type:GET_AD, url :'/api/getAdData'}
        //getLike('/api/getULikeData') { type:GET_U_LIKE, url :'/api/getULikeData'}

        this.props.getAdData('/api/getAdData');//dispatch(getAd('/api/getAdData'))  --reducers //homeReducer.js

        this.props.getULikeData('/api/getULikeData');//dispatch(getLike('/api/getULikeData'))
    }
    skipToLocation(id){
        this.props.history.push(`/detail/${id}`);
        //react-router <Route path='/detail/:id' component={Detail}/>
    }
    loadMore(){
        this.props.getULikeData('/api/getULikeData');
    }

    render() {
        const {userInfo,ad,cheap,reduces,guessULike,isLoading,history} = this.props;
        return (
            <div className={style.home}>
                <HomeHeader history={history} cityName={userInfo.cityName}/>
                <Category />
                <div style={{marginTop:'20px'}}/>
                <Ad ads={ad}/>
                <CheapOrReducers data={cheap} type={1}/>
                <CheapOrReducers data={reduces} type={2}/>
                <GuessULike skipToDetail={this.skipToLocation} loadMore={this.loadMore} isLoading={isLoading} data={guessULike}/>
            </div>
        )
    }

}

Home.defaultProps={
    userInfo: {},
    ad:[],
    cheap:[],
    reduces:[],
    guessULike:[],
    isLoading:false
};

Home.propTypes = {
    userInfo: PropTypes.object.isRequired,
    ad:PropTypes.arrayOf(PropTypes.object.isRequired),
    cheap:PropTypes.arrayOf(PropTypes.object.isRequired),
    reduces:PropTypes.arrayOf(PropTypes.object.isRequired),
    guessULike:PropTypes.arrayOf(PropTypes.object.isRequired),
    isLoading:PropTypes.bool.isRequired
};

// function mapStateToProps(state) {
//     return {
//         userInfo: state.wrap.userInfo,
//         ad:state.home.adData.ad,
//         cheap:state.home.adData.cheap,
//         reduces:state.home.adData.reduces,
//         guessULike:state.home.guessULike,
//         isLoading:state.wrap.fetchState==='start'
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         getAdData: bindActionCreators(getAd,dispatch),
//         getULikeData:bindActionCreators(getLike,dispatch)
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Home);

export default Home
