import React from "react";
import './header.scss';
import logo from '../../../assets/img/logoText.svg';

export const Header = () => {
    return (
        <div id="header" className="flex_container">
            <a href="/">
                <img height="50px" src={logo}/>
            </a>
            <div className="flex_container gap-2rem">
                <a href="/">
                    Home
                </a>
                <a href="/about">
                    About
                </a>
                <a href="/faq">
                    FAQ
                </a>
            </div>
            <div className="flex_container gap-1rem">
                <button className="claim">Claim</button>
                <button className="get_started">Get started</button>
            </div>
        </div>
    )
}
