import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';


// services
import api from '../../services/api.js';

// components
import ProductCard from '../../components/ProductCard';

import Footer from '../../components/Footer';

import actions from '../../redux/actions';

//styles
import './History.css';

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.props.actions.setCurrentLocation(this.props.location.pathname)
        this.setState({
            products: this.props.products,
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            products: nextProps.products,
        })
    }
    render() {
        const renderProducts = (
            this.state.products.map((product, index) =>
                <ProductCard
                    origin="history"
                    confirm={this.confirmRedeemProduct}
                    key={index}
                    userPoints={this.state.userPoints}
                    product={product} />
            ))
        const noProducts = (
            <Col xs={6}>
                <b className="text-no-products">You have not bought in this category</b>
            </Col>
        )    

        return (
            <div>
                <Col xs={10} xsOffset={1}>
                    <div className="shopping-history">Shopping history</div>
                    <Row center="xs">
                        {this.state.products.length > 0 ? renderProducts : noProducts}
                    </Row>
                </Col>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.copyHistory
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(History);
