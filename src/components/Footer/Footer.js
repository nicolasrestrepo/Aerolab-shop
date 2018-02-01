import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import BtnPagination from '../BtnPagination';


//styles
import './Footer.css';
function Footer(props) {
    return (
        <Col xs={10} xsOffset={1} className="footer">
            <Row>
                <Col xs={10} className="quantity-products">
                    <div className="text-products">{props.cuantityProducts} of 32 products</div>
                </Col>

                <Col xs={2} className="btn-pagination-footer">
                    <BtnPagination />
                </Col>
            </Row>
        </Col>
    )
}

const mapStateToProps = (state) => ({
    cuantityProducts: state.cuantityProductsRender
})
export default connect(mapStateToProps)(Footer);