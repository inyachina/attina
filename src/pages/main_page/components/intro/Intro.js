import React from "react";
import './intro.scss';
import girlGif from '../../../../assets/img/gifs/Working_girl.json'
import arrow from '../../../../assets/img/arrowBottom.svg'
import {JsonViewer} from "../../../common/json_viewer/JsonViewer";
import {SocialMedia} from "../../../common/social_media/SocialMedia";
import {handleOpenPopup} from "../../../common/popup/WarningPopup";

export const Intro = (props) => {
    return (
        <div id="intro" className="main_margin_top">
            <div className="info  flex_container__column">
                <div className="t1">
                    Your income is your
                    freedom, protect it.
                </div>
                <div className="mobile_reverse_column">
                    <div className="content">
                        Finally, fair insurance for internet income. Get
                        <br className="mobile"/>
                        protection for your earnings from social media
                        <br className="mobile"/>
                        and crypto hustle with instant payouts and no
                        <br className="mobile"/>
                        hidden fees.
                    </div>
                    <div className="desktop links flex_container">
                        <SocialMedia bg="#D09EF8" media="inst"/>
                        <SocialMedia bg="#D09EF8" media="twitter"/>
                    </div>
                    <div className="mobile links flex_container">
                        <SocialMedia media="inst"/>
                        <SocialMedia media="twitter"/>
                    </div>
                </div>
                <button onClick={handleOpenPopup}  className="st1">
                    {/*<img  className="intro_arrow" src={arrow}/>*/}
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
