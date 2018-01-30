import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//assets
import buyWhite from '../../assets/icons/buy-white.svg';
import buyBlue from '../../assets/icons/buy-blue.svg';
import coin from '../../assets/icons/coin.svg';

//styles
import './ProductCard.css';

// pendiente crear props types y test
class ProductCard extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { category, name, cost } = this.props.product;
        const { userPoints } = this.props;

        const buyIconBlue = (
            <div className="buy-icon">
                <img src={buyBlue} alt="buy" />
            </div>
        )

        const needCoins = (
            <div className="need-coin">
                <Chip className="chip-info">
                    You need {this.props.product.cost} <img src={coin} alt="coins" /> 
                </Chip>
            </div>
        )

        return (
            <Col xs={3}>
                    <Card className="card" onClick={() => this.props.confirm(this.props.product)}>
                    <div className="info-hover">
                        <img src={buyWhite} className="buy-icon-white" alt="buy" />
                            <div className="cost">{cost}<img src={coin} alt="coins" /> </div>
                            <Chip className="chip-buy">
                               Redeem now
                            </Chip>
                        </div>
                      { userPoints < cost ? needCoins : buyIconBlue }   
                        <img className="img-product" src={this.props.product.img.url} alt="product" />
                        <div className="info">
                            <p className="category">{category}</p>
                            <p className="name">{name}</p>
                        </div>
                    </Card>
           </Col>
        )
    }
}

export default ProductCard;

