import React from 'react';
import PropTypes from 'prop-types';
import arrowL from '../../assets/icons/arrow-left.svg';
import arrowR from '../../assets/icons/arrow-right.svg';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import actions from '../../redux/actions'

import './BtnPagination.css';
function BtnPagination(props){
    const setPage = (page) => props.actions.loadDataSetPage(page)
    return(
        <div className="btnPagination">
            <img src={arrowL} onClick={() => setPage(1)} alt="arrow left"/>
            <img src={arrowR} onClick={() => setPage(2)} alt="arrow right"/>
        </div>
    )
}

BtnPagination.defaultProps = {
    actions: {
        loadDataSetPage: () => {}
    }

}

BtnPagination.propTypes = {
    actions: PropTypes.shape({
        loadDataSetPage: PropTypes.func
    })
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(null, mapDispatchToProps)(BtnPagination);