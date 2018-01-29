import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// services
import api from '../../services/api.js';

// components
import ProductCard from '../../components/ProductCard';
import Filter from '../../components/Filter';

import actions from '../../redux/actions';

//assets 
    import coint from '../../assets/icons/coin.svg';
//styles
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            userPoints: 0,
            open: false,
            currentProduct: {}
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            products: nextProps.products,
            userPoints: nextProps.user.points
        })
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    confirmRedeemProduct = (product) => {
        this.setState({
            open: true,
            currentProduct: product,
        })
    }
    render() {
        const { price, cost, name, img } = this.state.currentProduct;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="confirmation"
                    modal={false}
                    actions={actions}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    you want to redeem this product
                   <Row>
                        <Col xs={12} className="confirmation">
                            {img ? <img className="img-info" src={img.url} alt="product" /> : ''}
                            <div className="info">
                                <Row>
                                    <Col xs={12}>{name}</Col>
                                    <Col xs={12}>{cost}</Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Dialog>
                <Filter />
                <Col xs={10} xsOffset={1}>
                    <Row center="xs">
                        {this.state.products.map(product =>
                            <ProductCard
                                confirm={this.confirmRedeemProduct}
                                key={product._id}
                                userPoints={this.state.userPoints}
                                product={product} />
                        )}
                    </Row>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.user
})

export default connect(mapStateToProps)(Home);
