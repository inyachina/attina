import React from "react";
import './mobileButton.scss'
import arrow from '../../../assets/img/arrowAccent.svg'

export const MobileButton = ({href, text, accent}) => {
    return <a href={href} className={`mobile_button mobile ${accent && "accent_mobile_button"}`}>
        <img src={arrow}/>
        {text}
    </a>
}
