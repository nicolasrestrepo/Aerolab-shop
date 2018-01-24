import React from 'react';
import logoAerolab from '../../assets/aerolab-logo.svg';
import './NavBar.css';

function NavBar(){
    return(
        <header className="nav-bar">
          <img src={logoAerolab}  alt="logo" />
        </header>   
    )   
}


export default NavBar