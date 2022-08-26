import React, {useEffect, useRef, useState} from "react";
import './faq.scss'
import anime from "animejs/lib/anime.es.js";
import expand from '../../../../assets/img/expand.svg'

export const Question = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationExpand = useRef();
    const animationCollapse = useRef();

    useEffect(() => {
        const question = "#question_" + props.index

        animationExpand.current = anime.timeline({
            autoplay: false,
        }).add({
            targets: `${question} .expand_btn .arrow`,
            rotate: -180,
            duration: 500
        }, -500)
            .add({
                targets: `${question}`,
                duration: 500,
                height: '13rem',
                easing: 'spring(1, 80, 10, 0)'
            },)
            .add({
                targets: `${question} .a`,
                opacity: '1',
                duration: 200,
            }, +200)

        animationCollapse.current = anime.timeline({
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
            }, -100)
    })

    const handleClick = () => {
        if (isAnimating) return;

        setIsAnimating(true)
        !isOpen ? animationExpand.current.restart() : animationCollapse.current.restart();
        setOpen(!isOpen)
        setTimeout(() => setIsAnimating(false), 500)
    }

    return (

        <div id={"question_" + props.index}
             className={"main_question_block container__relative"}>
            <div className="q" onClick={handleClick}>
                <div className="text">
                    {props.data.question}
                </div>
                <div className="expand_btn container__centered">
                    <img className="arrow" src={expand}/>
                </div>
            </div>
            <div className="a">
                {props.data.answer}
            </div>

        </div>
    )
}
