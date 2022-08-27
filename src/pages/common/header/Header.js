import React, {useState} from "react";
import './header.scss';
import logo from '../../../assets/img/logoText.svg';
import menu from '../../../assets/img/menu.svg';
import {MobileMenu} from "./MobileMenu";
import $ from 'jquery';
import {handleOpenPopup} from "../popup/WarningPopup";

export const Header = () => {
    const [opened, setOpened] = useState(false)
    useState(() => {

    })
    const handleClick = () => {
        if (opened) {
            $("#mobile_menu").css({"opacity": 0, "pointerEvents": "none"})
            $('html, body').css('overflowY', 'auto');;
        } else {
            $("#mobile_menu").css({"opacity": 1, "pointerEvents": "auto"})
            $('html, body').css('overflowY', 'hidden')

        }
        setOpened(!opened)
    }
    return (
        <div id="header" className="flex_container">
            <a href="/">
                <img className="main_logo" src={logo}/>
            </a>
            <div className="flex_container gap-2rem desktop_header">
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
            <div className="flex_container gap-1rem desktop_header">
                <button className="claim">Claim</button>
                <button onClick={handleOpenPopup}  className="get_started">Get started</button>
            </div>
            <button onClick={handleClick} className="mobile_menu_button">
                <img src={menu}/>
                {opened ? "Close" : "Menu"}
            </button>
            <MobileMenu/>

        </div>
    )
}
