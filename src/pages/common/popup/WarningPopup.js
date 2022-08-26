import React from "react";
import './warningPopup.scss';
import cross from '../../../assets/img/accent_cross.svg';
import $ from 'jquery';

export const WarningPopup = () => {
    const handleClosePopup = () => [
        $('.warning_popup_container').css(
            {
                "opacity": "0",
                "pointerEvents": "none"
            })
    ]
    return (
        <div className="warning_popup_container container__centered">
            <div className="warning_popup flex_container__column">
                <img
                    onClick={handleClosePopup}
                    className="cross" src={cross}/>
                <div className="text">
                    Sorry, our service is currently being updated
                </div>
                <button
                    onClick={handleClosePopup}
                    className="accent_mobile_button">Alright</button>
            </div>
        </div>
    )
}
export const handleOpenPopup = () => [
    $('.warning_popup_container').css(
        {
            "opacity": "1",
            "pointerEvents": "auto"
        })
]
