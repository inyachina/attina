import React from "react";
import './footer.scss';
import logo from '../../../assets/img/logoText.svg';
import {SocialMedia} from "../social_media/SocialMedia";

export const Footer = () => {
    return (
        <div id="footer" classname="main_container">
            <div className="line"/>
            <div className="content">
                <a href="/">
                    <img className="main_logo" src={logo}/>
                </a>
                <div className="links flex_container">
                    <div className="column flex_container__column">
                        <span>Company</span>
                        <a href="/about">About us</a>
                        <a>How it works</a>
                        <a href="/faq">FAQ</a>
                    </div>

                    <div className="column flex_container__column">
                        <span>Legal</span>
                        <a href={"/privacy"}>Privacy policy</a>
                        <a href={"/terms"}>Terms of condition</a>
                    </div>
                    <div className="footer_socials column flex_container__column">
                        <span>Social media</span>
                        <div className="flex_container gap-1rem">
                            <SocialMedia media="inst"/>
                            <SocialMedia media="twitter"/>
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
