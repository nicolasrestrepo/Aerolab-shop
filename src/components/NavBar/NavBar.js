import React from 'react';

// assets
import logoAerolab from '../../assets/aerolab-logo.svg';
import headerImg from '../../assets/header-x1.png'
import coin from '../../assets/icons/coin.svg';

//styles
import { Row } from 'react-materialize';
import './NavBar.css';

function NavBar(props){
    return(
        <div>
        <header className="nav-bar">
            <img src={logoAerolab}  alt="logo" />
            <p>{props.user.name}</p>
            <div>{props.user.points} <img src={coin}  alt="coins" /></div>   
            </header>   
            <img src={headerImg}  alt="logo" className="imgHeader" />
        </div>    
    )   
}


export default NavBar;