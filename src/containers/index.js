import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import  City  from '../containers/cityContainer'
import Detail from '../containers/detailContainer'
import Home from '../containers/homeContainer'
import NotFound from '../components/notFound/NotFound'  //未写container
import Search from '../components/search/Search'  //未写container
import User from '../components/user/User'  //未写container
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUserInfo, getUserLocation } from '../actions/wrapActions'
import './css/reset.css'
import style from './css/style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <Router>
                <div>
                    {
                        this.props.isLoading ?
                            <div className={style.loadingContainer}>
                                <img className={style.imgIcon} src='https://www.dpfile.com/app/app-m-module/static/6261145dd7c0f26bc0a26831e5cb358a.gif'/>
                            </div>
                            :null
                    }
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/city' component={City}/>
                        <Route path='/search' component={Search}/>
                        <Route path='/user' component={User}/>
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
        )
    }

    componentDidMount() {
        //获取地理位置信息
        this.props.getUserLocation({
            url:'/api/getLocation'
        });
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.wrap.fetchState === 'start'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo:bindActionCreators(updateUserInfo, dispatch),
        getUserLocation:bindActionCreators(getUserLocation,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
