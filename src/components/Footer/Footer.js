import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BtnPagination from '../BtnPagination';


//styles
import './Footer.css';
function Footer() {
    return (
        <Col xs={10} xsOffset={1} className="footer">
            <Row>
                <Col xs={10} className="quantity-products">
                    <div className="text-products">16 of 32 products</div>
                </Col>

                <Col xs={2} className="btn-pagination-footer">
                    <BtnPagination />
                </Col>
            </Row>
        </Col>
    )
}


export default Footer;