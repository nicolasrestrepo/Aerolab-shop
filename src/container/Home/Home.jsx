import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Row, Col } from 'react-flexbox-grid';



// services
import api from '../../services/api.js';

// components
import ProductCard from '../../components/ProductCard';
import Filter from '../../components/Filter';
import ModalConfirm from '../../components/ModalConfirm'; 
import Footer from '../../components/Footer';

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

    componentDidMount(){
        this.props.actions.setCurrentLocation(this.props.location.pathname)
        this.setState({
            products: this.props.products,
            userPoints: this.props.user.points
        })
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
                                origin="home"
                                confirm={this.confirmRedeemProduct}
                                key={product._id}
                                userPoints={this.state.userPoints}
                                product={product} />
                        )}
                    </Row>
                </Col>
               <Footer /> 
            </div>
        );
    }
}

Home.defaultProps = {
    actions: {
        setCurrentLocation: () => {},
    },
    location: {
        pathname: "/"
    },
    products: [],
    user: {}
}

Home.propTypes = {
    actions: PropTypes.shape({
        setCurrentLocation: PropTypes.func,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string
    }),
    products: PropTypes.array,
    user: PropTypes.object
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
