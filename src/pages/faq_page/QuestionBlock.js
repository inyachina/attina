import React from 'react';
import "./faq.scss";

export const QuestionBlock = (props) => {
    const question = props.question;
    const answer = props.answer;
    const index = props.index;
    return (
        <div id={`question_${index}`} className="flex_container__column question_block">
            <div className="t3 q">
                {question}
            </div>
            <div className="a" dangerouslySetInnerHTML={{__html: `${answer}`}}>
            </div>
        </div>
    )
}
