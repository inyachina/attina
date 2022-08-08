import React from "react";
import './mobileButton.scss'
import arrow from '../../../assets/img/arrowAccent.svg'

export const MobileButton = ({text, link}) => {
    return <a className="mobile_button mobile">
        <img src={arrow}/>
        {text}
    </a>
}
