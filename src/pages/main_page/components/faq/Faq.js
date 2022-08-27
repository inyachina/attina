import React, {useState} from "react";
import arrowMoreAnswers from '../../../../assets/img/arrowMoreAnswers.svg'
import {Question} from "./Question";
import './faq.scss'
import {MobileButton} from "../../../common/mobile_button/MobileButton";
import data from '../../../../dataFaqPage.json';
import anime from "animejs";

export const Faq = (props) => {
    const [prevInd, setPrevInd] = useState();

    const handlePrevInd = (index) => {
        if (index === prevInd) setPrevInd(undefined)
        else setPrevInd(index)
    }
    const closePrev = () => {
        if (!prevInd) return
        const question = "#question_" + prevInd
        anime.timeline({
            autoplay: false,
        }).add({
            targets: `${question} .expand_btn .arrow`,
            rotate: 0,
            duration: 200
        }, -200)
            .add({
                targets: `${question}`,
                height: '5.1rem',
                easing: 'spring(1, 80, 10, 0)',
                duration: 500,
            },)
            .add({
                targets: `${question} .q .text`,
                translateY: '0',
                duration: 20,
            },)
            .add({
                targets: `${question} .a`,
                opacity: '0',
                duration: 10,
            }, -100).play()
    }
    return (
        <div id="faq" className="flex_container__column">
            <div className="t3">
                FAQ
            </div>
            <div className="questions flex_container__column">
                {data.questions.slice(0, 5).map((item, index) => (
                    <Question
                        setPrevInd={handlePrevInd}
                        closePrev={closePrev}
                        index={index} data={item}/>


                ))}
            </div>
            <a className="desktop" href="/faq">
                <img src={arrowMoreAnswers}/>
            </a>
            <MobileButton href="/faq" text="More answers"/>
        </div>
    )
}
