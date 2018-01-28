import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
// services
import api from '../../services/api.js';

// components
import ProductCard from '../../components/ProductCard';
import Filter from '../../components/Filter';

import actions from '../../redux/actions';
//styles
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            userPoints: 0
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            products: nextProps.products,
            userPoints: nextProps.user.points
        })
    }
    render() {

        return (
            <div>
                <Filter />
                <Row>
                    {this.state.products.map(product =>
                        <ProductCard
                            key={product._id}
                            userPoints={this.state.userPoints}
                            {...product} />
                    )}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.user
})

export default connect(mapStateToProps)(Home);
