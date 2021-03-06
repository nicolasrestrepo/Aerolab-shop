import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import { Card } from 'material-ui/Card';


//assets
import buyWhite from '../../assets/icons/buy-white.svg';
import buyBlue from '../../assets/icons/buy-blue.svg';
import coin from '../../assets/icons/coin.svg';

//styles
import './ProductCard.css';

// pendiente crear props types y test
function ProductCard(props) {
    const renderItem = () => {
        if (props.origin === "home") {
            if (props.userPoints < props.product.cost) {
                return (
                    <div className="need-coin">
                        <Chip className="chip-info">
                            You need {props.product.cost} <img src={coin} alt="coins" />
                        </Chip>
                    </div>
                )
            } else {
                return (
                    <div className="buy-icon">
                        <img src={buyBlue} alt="buy" />
                    </div>
                )
            }
        } else {
            return (
                <div className="need-coin">
                    <Chip className="chip-info">
                        Cost {props.product.cost} <img src={coin} alt="coins" />
                    </Chip>
                </div>
            )
        }

    }

    const renderInfoBuy = () => {
        if (props.origin === "home" && props.userPoints > props.product.cost) {
            return (
                <div className="info-hover">
                    <img src={buyWhite} className="buy-icon-white" alt="buy" />
                    <div className="cost">{props.product.cost}<img src={coin} alt="coins" /> </div>
                    <Chip className="chip-buy" onClick={() => props.confirm(props.product)}>
                        Redeem now
                    </Chip>
                </div>
            )
        }
    }
    return (
        <Col xs={3}>
            <Card className="card">
                {renderInfoBuy()}
                {renderItem()}
                {props.product.img && (
                    <img className="img-product" src={props.product.img.url} alt="product" />)
                }
                <div className="info">
                    <p className="category">{props.product.category}</p>
                    <p className="name">{props.product.name}</p>
                </div>
            </Card>
        </Col>
    )
}

ProductCard.defaultProps = {
    origin: "home",
    userPoints: 5000,
    product: {},
}

ProductCard.propTypes = {
    origin: PropTypes.string,
    userPoints: PropTypes.number,
    product: PropTypes.object,

}

export default ProductCard;

