import { connect } from 'react-redux'
import { getDetail } from '../actions/detailActions'
import { bindActionCreators } from 'redux'
import Detail from '../components/detail/Detail'

function mapSateToProps(state) {
    return {
        imgs: state.orderDetail.imgs,
        orderDetail: state.orderDetail.orderDetail,
        recommends: state.orderDetail.recommends
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetail: bindActionCreators(getDetail, dispatch)
         //detailActions.js --- getDetail(url, data)
         //init state at Detail.js --- in componentDidMount() --- invoke it
    }
}


export default connect(
    mapSateToProps,
    mapDispatchToProps
)(Detail);
