import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chip from 'material-ui/Chip';
import BtnPagination from '../BtnPagination';
import actions from '../../redux/actions'

//styles
import './Filter.css';
class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeFilter: 'recent'
        }
    }

    changeActive = (active) => {
        this.setState({
            activeFilter: active
        })
    }
    //accion for get recents products from copy products 
    recents = () => this.props.actions.loadAllRecentsHome()


    orderPrice = (order) => this.props.actions.orderPrice(order)

    render() {
        const {  activeFilter } = this.state;

        return (
            <Col xs={10} xsOffset={1} className="filter">
                <Row>
                    <Col xs={1} className="quantity-products">
                        {this.props.cuantityProducts} of 32 products
                </Col>
                    <Col xs={5} className="sort-by">
                        <div className="text">Sort by: </div>
                        <Chip
                            onClick={() => (this.recents(), this.changeActive('recent'))}
                            className={`chip-filter ${activeFilter === 'recent' ? 'active' : ''}`}>Most recent </Chip>
                        <Chip
                            onClick={() => (this.orderPrice('lowest'), this.changeActive('lowest'))}
                            className={`chip-filter ${activeFilter === 'lowest' ? 'active' : ''}`}>Lowest price</Chip>

                        <Chip
                            onClick={() => (this.orderPrice('highest'), this.changeActive('highest'))}
                            className={`chip-filter ${activeFilter === 'highest' ? 'active' : ''}`}>Highest price</Chip>
                    </Col>

                    <Col xs={1} xsOffset={4} className="btn-pagination-filter">
                        <BtnPagination />
                    </Col>
                </Row>
            </Col>
        )
    }

}

Filter.defaultProps = {
    actions: {
        loadAllRecentsHome: () => {},
        orderPrice: () => {}
    },
    categories: []
}

Filter.propTypes = {
    actions: PropTypes.shape({
        loadAllRecentsHome: PropTypes.func,
        orderPrice: PropTypes.func
    }),
    categories: PropTypes.array
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    cuantityProducts: state.cuantityProductsRender
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

