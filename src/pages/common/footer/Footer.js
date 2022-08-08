import React from "react";
import './footer.scss';
import logo from '../../../assets/img/logoText.svg';
import inst from "../../../assets/img/accent_inst.svg"
import twitter from "../../../assets/img/accent_twitter.svg"

export const Footer = () => {
    return (
        <div id="footer" classname="main_container">
            <div className="line"/>
            <div className="content">
                <a href="/">
                    <img src={logo}/>
                </a>
                <div className="links flex_container">
                    <div className="column flex_container__column">
                        <span>Company</span>
                        <a href="/about">About us</a>
                        <a>How it works</a>
                        <a href="/faq">Faq</a>
                    </div>

                    <div className="column flex_container__column">
                        <span>More</span>
                        <a>Privacy policy</a>
                        <a>Contact us</a>
                    </div>
                    <div className="column flex_container__column">
                        <span>Social media</span>
                        <div className="flex_container gap-1rem">
                            <a><img src={twitter}/></a>
                            <a><img src={inst}/></a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="subtitle">*/}
            {/*    ©But their losses from fraudsters, work interruptions and accidents reach colossal proportions.*/}
            {/*</div>*/}
        </div>

    );
}
