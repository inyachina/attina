import React from "react";
import './intro.scss';
import inst from '../../../../assets/img/inst.svg'
import tiktok from '../../../../assets/img/tiktok.svg'
import twitter from '../../../../assets/img/twitter.svg'
import youtube from '../../../../assets/img/youtube.svg'
import metamask from '../../../../assets/img/metamask.svg'
import girlGif from '../../../../assets/img/gifs/Working_girl.json'
import {JsonViewer} from "../../../common/json_viewer/JsonViewer";

export const Intro = (props) => {
    return (
        <div id="intro" className="main_margin_top">
            <div className="info  flex_container__column">
                <div className="t1">
                    Your income is your
                    freedom, protect it.
                </div>
                <div className="st1 content">
                    {props.data.content}
                </div>
                <div className="links flex_container">
                    <a><img src={inst}/></a>
                    <a><img src={tiktok}/></a>
                    <a><img src={twitter}/></a>
                    <a><img src={youtube}/></a>
                    <a><img src={metamask}/></a>
                </div>
                <button className="st1">
                    {props.data.button}
                </button>
            </div>
                <JsonViewer src={girlGif} mirrored nondiv/>
        </div>
    )
}
