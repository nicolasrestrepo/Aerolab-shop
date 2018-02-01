import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import coint from '../../assets/icons/coin.svg';
import { Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import './Modal.css';
function ModalConfirm(props){
    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={props.handleClose}
        />,
        <FlatButton
            label="Confirm"
            primary={true}
            keyboardFocused={true}
            onClick={props.redeemProduct}
        />,
    ];
    return(
        <Dialog
        title="confirmation"
        modal={false}
        actions={actions}
        open={props.open}
        onRequestClose={props.handleClose}
    >
        <Row>
            <Col xs={12}>
                <div className="text-confirmation">you want to redeem this product</div>
            </Col>
            <Col xs={12} className="confirmation">
                {props.img ? <img className="img-info" src={props.img.url} alt="product" /> : ''}
                <div className="info">
                    <Row>
                        <Col xs={12}>{props.name}</Col>
                        <Col className="coint" xs={12}><img src={coint} alt="coint" /> {props.cost}</Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Dialog>
)
}

ModalConfirm.defaultProps = {
    handleClose: () => {},
    redeemProduct: () => {},
    img: {
        url: 'default url'
    }, 
    cost: 3000
}

ModalConfirm.propTypes = {
    handleClose: PropTypes.func,
    redeemProduct: PropTypes.func,
    img: PropTypes.shape({
        url: PropTypes.string
    }),
    cost: PropTypes.number
}



export default ModalConfirm;