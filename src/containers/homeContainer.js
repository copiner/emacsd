//import React, {Component, PropTypes} from 'react'
//import HomeHeader from "./homeHeader/HomeHeader";
import {connect} from 'react-redux'
//import Category from "./category/Category";
//import style from './css/style.css'
import { bindActionCreators } from 'redux'
import { getAd, getLike } from '../actions/homeActions'
import Home from '../components/home/Home'
//import CheapOrReducers from "./cheapOrReducers/CheapOrReducers";
//import GuessULike from "./guessULike/GuessULike";

function mapStateToProps(state) {
    return {
        userInfo: state.wrap.userInfo,
        ad:state.home.adData.ad,
        cheap:state.home.adData.cheap,
        reduces:state.home.adData.reduces,
        guessULike:state.home.guessULike,
        isLoading:state.wrap.fetchState==='start'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAdData: bindActionCreators(getAd, dispatch),
        getULikeData: bindActionCreators(getLike, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
