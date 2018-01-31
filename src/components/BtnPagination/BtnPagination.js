import React from 'react';
import arrowL from '../../assets/icons/arrow-left.svg';
import arrowR from '../../assets/icons/arrow-right.svg';

import './BtnPagination.css';
function BtnPagination(){
    return(
        <div className="btnPagination">
            <img src={arrowL} alt="arrow left"/>
            <img src={arrowR} alt="arrow right"/>
        </div>
    )
}

export default BtnPagination;