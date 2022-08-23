import React from "react";
import './mobileButton.scss'
import arrow from '../../../assets/img/arrowAccent.svg'

export const MobileButton = ({text, accent}) => {
    return <a className={`mobile_button mobile ${accent && "accent_mobile_button"}`}>
        <img src={arrow}/>
        {text}
    </a>
}
