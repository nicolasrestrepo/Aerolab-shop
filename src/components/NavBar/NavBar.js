import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';

// assets
import logoAerolab from '../../assets/aerolab-logo.svg';
import headerImg from '../../assets/header-x1.png'
import coin from '../../assets/icons/coin.svg';

//styles
import './NavBar.css';


function NavBar(props) {
    return (
        <div>
            <header className="nav-bar">
                <Row>
                    <Col xs={8} className="logo">
                        <img src={logoAerolab} alt="logo" />
                    </Col>
                    <Col xs={4} className="info">
                        <p>{props.user.name}</p>
                        <Chip className="chip-info">
                            {props.user.points} <img src={coin} alt="coins" />
                        </Chip>
                    </Col>
                </Row>
            </header>
            <img src={headerImg} alt="logo" className="imgHeader" />
        </div>
    )
}


export default NavBar;