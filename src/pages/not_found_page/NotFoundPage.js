import React from "react";
import "./notFoundPage.scss";
import manGif from '../../assets/img/gifs/Other_Man_With_Magnifying_Glass.json'
import {Player} from "@lottiefiles/react-lottie-player";
import {FixedLeftBlock} from "../common/fixed_block/FixedLeftBlock";
import data from "../../dataMainPage.json";

export const NotFoundPage = () => {
    return (
        <div id="not_found_page" className="main_container">
            <div className="grid_container__halved">
                <div className="flex_container__column error">
                    <div className="t1">404</div>
                    <div className="t2">Page not found</div>
                </div>
                <div className="container__relative gif_container">
                    <div className="container__absolute gif">
                        <Player src={manGif} autoplay loop/>
                    </div>
                </div>
            </div>
        </div>
    )
}
