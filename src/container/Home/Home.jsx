import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';

// services
import api from '../../services/api.js';

// components
import ProductCard from '../../components/ProductCard';
import Filter from '../../components/Filter';
import ModalConfirm from '../../components/ModalConfirm'; 

import actions from '../../redux/actions';

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
        this.setState({ 
            open: false,
            currentProduct: {}
        });
    };

    confirmRedeemProduct = (product) => {
        this.setState({
            open: true,
            currentProduct: product,
        })
    }

     redeemProduct = async () => {
         try{
             const res = await api.redeem.post(this.state.currentProduct._id)
             this.setState({open: false})
            this.props.actions.loadUser();
         }catch(err){

         }
       
        this.setState({
            open:false
        })
    }
    render() {
        return (
            <div>
            <ModalConfirm 
                handleClose={this.handleClose}
                redeemProduct={this.redeemProduct}
                open={this.state.open}
                {...this.state.currentProduct}
            />
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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
