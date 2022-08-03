import React, {useEffect, useRef, useState} from "react";
import "./faq.scss";
import data from "../../dataFaqPage.json"
import $ from 'jquery';
import {QuestionBlock} from "./QuestionBlock";
import arrowMoreQuestions from '../../assets/img/arrowMoreQuestions.svg'
import anime from "animejs/lib/anime.es.js";

export const FaqPage = () => {
    const [questions, setQuestions] = useState(data.questions.filter((q) => q.category === data.categories[0].name).map(q => q));
    const [expanded, setExpanded] = useState(false)
    const arrowTurnAnimation = useRef();
    const arrowReturnAnimation = useRef();
    useEffect(() => {
        $('#filter_button_1').attr('checked', 'checked');
        arrowTurnAnimation.current = anime({
            autoPlay: false,
            targets: "#show_more_questions_arrow",
            duration: 1000,
            rotate: 180

        })
        arrowReturnAnimation.current = anime({
            autoPlay: false,
            targets: "#show_more_questions_arrow",
            duration: 1000,
            rotate: 0
        })
    }, [questions, arrowTurnAnimation, arrowReturnAnimation])

    const handleFilterClick = (categoryName) => {
        const filteredArrays = data.questions.filter((q) => q.category === categoryName).map(q => q);
        setQuestions([...filteredArrays]);
    }
    const getQuestions = () => {
        return expanded ? questions : questions.slice(0, 4)
    }

    const handleExpandClick = () => {
        setExpanded(!expanded)
        if (!expanded) arrowTurnAnimation.current.restart()
        else arrowReturnAnimation.current.restart()
    }

    return (
        <>
            <div id="faq_page" className="main_container">
                <div className="t1 main_margin_top">
                    Frequently Asked Questions
                </div>
                <div className="filter_text">
                    Filter by category
                </div>
                <form className="buttons flex_container">
                    {data.categories.map((category, index) => (
                        <div className="filter_button">
                            <input id={`filter_button_${index + 1}`}
                                   type="radio"
                                   name="filter_button"
                            />
                            <label for={`filter_button_${index + 1}`}
                                   onClick={() => {
                                       handleFilterClick(category.name)
                                   }}>
                                {category.name}
                            </label>
                        </div>
                    ))}
                </form>
                <div className="question_container flex_container__column">
                    {getQuestions().map((q, index) => (
                        <QuestionBlock question={q.question}
                                       answer={q.answer}
                                       index={index}/>
                    ))}
                </div>
                <div className="arrow_text flex_container" onClick={handleExpandClick}>
                    <img id="show_more_questions_arrow" className="arrow" src={arrowMoreQuestions}/>
                    <div>{expanded ? "Less questions" : "See more questions"}</div>
                </div>
                <div id="help_block" className="grid_container__halved">
                    <div className="left_block flex_container__column">
                        <div className="t2">Can't find what you're looking for?</div>
                        <div>Reach out to our customer experience team via email and we'll get back to you shortly.
                        </div>
                        <div>support@attina.com</div>
                    </div>
                    <div></div>
                </div>
            </div>

        </>
    )
}
