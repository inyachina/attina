import React, {useEffect, useState} from "react";
import './header.scss';
import logo from '../../../assets/img/logoText.svg'
import lock from '../../../assets/img/lock.svg'

export const MobileMenu = () => {
    const [currentPage, setCurrentPage] = useState();
    useEffect(() => {
        const url = window.location.href;
        if (url.includes("/about")) setCurrentPage("about")
        if (url.includes("/faq")) setCurrentPage("faq")
        if (!url.includes("/about") && !url.includes("/faq")) setCurrentPage("home")
    })

    return (<div id="mobile_menu" className="mobile_menu flex_container__column">
        <div className="flex_container__column">
            <div className="menu_links flex_container__column gap-2rem">
                <a className={`t1 ${currentPage === "home" && 'active_link'}`} href="/">Home</a>
                <a className={`t1 ${currentPage === "about" && 'active_link'}`} href="/about">About</a>
                <a className={`t1 ${currentPage === "faq" && 'active_link'}`} href="/faq">FAQ</a>
            </div>
            <div className="menu_buttons_container ">
                <div className="menu_buttons flex_container__column">
                    <a href="/privacy">
                        <button className="privacy_button">
                            <div className="privacy_button_absolute">
                                <img src={lock}/>
                                Privacy Policy
                            </div>
                        </button>
                    </a>
                    <a href="/terms">
                        <button className="privacy_button">
                            <div className="privacy_button_absolute">
                                <img src={lock}/>
                                Terms of condition
                            </div>
                        </button>
                    </a>
                    <a>
                        <button className="get_started">Get Started</button>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}
