import React, { Component } from 'react'
//assets

import buyWhite from '../../assets/icons/buy-white.svg';
import buyBlue from '../../assets/icons/buy-blue.svg';
import coin from '../../assets/icons/coin.svg';

//styles
import { Card, Col } from 'react-materialize';
import './ProductCard.css';

// pendiente crear props types y test
class ProductCard extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { category, name } = this.props;
        const buyIconBlue = (
            <div className="buy-icon">
                <img src={buyBlue} alt="buy" />
            </div>
        )
        const needCoins = (
        <div className="need-coin">
            <spam>
                <p>You need 800</p><img src={coin} />
            </spam>
        </div>
        )
        return (
            <div className="product-card">
                <Col m={3} s={3}>
                    <Card className="card" >
                        {needCoins}
                        <img src={this.props.img.url} alt="product" />
                        <div className="info">
                            <p className="category">{category}</p>
                            <p className="name">{name}</p>
                        </div>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default ProductCard;

