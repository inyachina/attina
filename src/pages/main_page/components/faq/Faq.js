import React from "react";
import arrowMoreAnswers from '../../../../assets/img/arrowMoreAnswers.svg'
import {Question} from "./Question";
import './faq.scss'
import {MobileButton} from "../../../common/mobile_button/MobileButton";

export const Faq = (props) => {
    return (
        <div id="faq" className="flex_container__column">
            <div className="t3">
                FAQ
            </div>
            <div className="questions flex_container__column">
                {props.data.map((item, index) => (
                    <Question index={index} data={item}/>
                ))}
            </div>
            <a className="desktop" href="/faq">
                <img src={arrowMoreAnswers}/>
            </a>
            <MobileButton text="More answers"/>
        </div>
    )
}
