import React from "react";
import "./blocks.scss";
import phone from '../../../../assets/img/phone.png'
import arrowHowItWorks from '../../../../assets/img/arrowHowItWorks.svg'
import arrowGetProtection from '../../../../assets/img/arrowGetProtection.svg'
import white_logo from '../../../../assets/img/white_logo.svg'
import arrow from '../../../../assets/img/arrowWhiteLearnMore.svg'
import tick from '../../../../assets/img/tick.svg'
import inst from '../../../../assets/img/white_inst.svg'
import tiktok from '../../../../assets/img/white_tiktok.svg'
import twitter from '../../../../assets/img/white_twitter.svg'
import youtube from '../../../../assets/img/white_youtube.svg'
import metamask from '../../../../assets/img/white_metamask.svg'
import manGif from "../../../../assets/img/gifs/Man_With_MAgnifying_Glass.json";
import {FixedLeftBlock} from "../../../common/fixed_block/FixedLeftBlock";
import {JsonViewer} from "../../../common/json_viewer/JsonViewer";

export const Blocks = (props) => {
    return (
        <>
            <div className="first_block flex_container__column">
                <img src={white_logo}/>
                <div className="t3 content">
                    {props.data.FirstBlock.content}
                </div>
                <div className="learn_more flex_container">
                    <img src={arrow}/>
                </div>
            </div>
            <div className="second_block">
                <div className="t2 title">
                    Real talk.<br/>
                    Here are the hard facts
                </div>
                <div className="facts flex_container">
                    {props.data.SecondBlock.facts.map((item) => (
                            <div className="fact flex_container__column">
                                <div className="stat">
                                    {item.stat}
                                </div>
                                <div className="text">
                                    {item.text}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="third_block grid_container__halved">
                <div className="info">
                    <div className="t2 title">
                        What it means <br/>to be backed <br/> by us
                    </div>
                    <div className="sub_title">
                        We cover what matters — your <br/> income like never before
                    </div>
                </div>
                <div className="options flex_container__column">
                    {props.data.ThirdBlock.options.map((option, index) => (
                        <div className="option flex_container">
                            <img src={tick}/>
                            <div className="text">
                                {option.text}
                                {index === 0 && <div className="links flex_container">
                                    <a><img src={inst}/></a>
                                    <a><img src={tiktok}/></a>
                                    <a><img src={twitter}/></a>
                                    <a><img src={youtube}/></a>
                                    <a><img src={metamask}/></a>
                                </div>}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="fourth_block grid_container__halved">
                <div>
                    <JsonViewer src={manGif}/>
                </div>
                <div className="content flex_container__column">
                    <div className="t2">
                        Our service for<br/>
                        influencers, <br/>
                        streamers, <br/>
                        business promoters, <br/>
                        crypto-enthusiasts.
                    </div>
                    <div className="sub_title">
                        {props.data.FourthBlock.subTitle}
                    </div>
                </div>
            </div>
            <div id="fifth_block" className="fifth_block grid_container__halved">
                <div className="info flex_container__column">
                    <div className="t2 title">
                        Simple as <span className="t2 title">1, 2, 3</span>
                    </div>
                    {props.data.FifthBlock.options.map((option, index) => (
                        <div className="option flex_container">
                            <div className="number container__centered">
                                <div>{index + 1}</div>
                            </div>
                            <div className="text">{option.text}</div>
                        </div>
                    ))}
                    <img className="arrow" src={arrowHowItWorks}/>
                </div>
                <img className="phone_img" src={phone}/>
            </div>
            <FixedLeftBlock data={props.data.SixthBlock}/>
            <div className="seventh_block flex_container__column">
                <div className="t3 text">
                    {props.data.SevenBlock.content}
                </div>
                <img src={arrowGetProtection}/>
            </div>
        </>)
}
