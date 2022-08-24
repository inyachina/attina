import React from "react";
import './intro.scss';
import girlGif from '../../../../assets/img/gifs/Working_girl.json'
import arrow from '../../../../assets/img/arrowBottom.svg'
import {JsonViewer} from "../../../common/json_viewer/JsonViewer";
import {SocialMedia} from "../../../common/social_media/SocialMedia";

export const Intro = (props) => {
    return (
        <div id="intro" className="main_margin_top">
            <div className="info  flex_container__column">
                <div className="t1">
                    Your income is your
                    freedom, protect it.
                </div>
                <div className="mobile_reverse_column">
                    <div className="st1 content">
                        {props.data.content}
                    </div>
                    <div className="links flex_container">
                        <SocialMedia media="inst"/>
                        {/*<SocialMedia media="tiktok"/>*/}
                        <SocialMedia media="twitter"/>
                        {/*<SocialMedia media="youtube"/>*/}
                    </div>
                </div>
                <button className="st1">
                    <img className="intro_arrow" src={arrow}/>
                    {props.data.button}
                </button>
            </div>
            <div className="intro_json">
                <JsonViewer
                    src={girlGif} mirrored/>
            </div>
        </div>
)
}
