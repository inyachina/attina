import React from "react";
import arrowLearnMore from '../../assets/img/arrowLearnMore.svg'
import triangle_1 from '../../assets/img/triangle_1.svg'
import triangle_2 from '../../assets/img/triangle_2.svg'
import triangle_3 from '../../assets/img/triangle_3.svg'
import Alexander from '../../assets/img/Alexander.png'
import commas from '../../assets/img/commas.svg'
import "./about.scss";
import "./aboutAdaptive.scss";
import logo from "../../assets/img/logo.svg";
import data from '../../dataAboutUsPage.json';
import {FixedLeftBlock} from "../common/fixed_block/FixedLeftBlock";
import {JsonViewer} from "../common/json_viewer/JsonViewer";
import phoneGif from "../../assets/img/gifs/Like_A_Post.json";
import handGif from "../../assets/img/gifs/Thumbs_Up.json";
import pinkHandGif from "../../assets/img/gifs/Pink_Thumbs_Up.json";
import interfaceGif from "../../assets/img/gifs/Interface.json";
import {MobileButton} from "../common/mobile_button/MobileButton";
import {handleOpenPopup} from "../common/popup/WarningPopup";

export const AboutPage = () => {
    return (
        <div id="about_page" className="main_container">
            <div className="t1 main_title main_margin_top">
                Enjoy stability <br className={"mobile"}/> doing<br className="desktop"/> what <br
                className={"mobile"}/> you love.
            </div>
            <img className="arrow desktop" src={arrowLearnMore}/>
            <div className="phone_block container__relative container__centered">
                <div className="phone_gif">
                    <JsonViewer src={phoneGif}/>
                </div>
                <div className="tip free">
                    <span className="t3">Free you <br className="mobile"/>mind</span>
                    <img src={triangle_1}/>
                </div>
                <div className="tip feel_safe">
                    <span className="t3 desktop">Feel safe</span>
                    <span className="t3 mobile">Keep <br/> going!</span>
                    <img src={triangle_3}/>
                </div>
                <div className="tip keep">
                    <span className="t3 desktop">Keep going</span>
                    <span className="t3 mobile">Feel<br/> save</span>
                    <img src={triangle_2}/>
                </div>
            </div>
            <div id={"first_block"} className="flex_container__column">
                <div className="main_block flex_container__column">
                    <img src={logo}/>
                    <div className="t3 content">
                        {data.FirstBlock.content}
                    </div>
                </div>
                <div className="sub_blocks flex_container">
                    <div className="sub_block flex_container__column">
                        <div className="t2">Our mission</div>
                        <div className="text">{data.FirstBlock.text1}</div>
                    </div>
                    <div className="sub_block flex_container__column">
                        <div className="t2">Why we exist</div>
                        <div className="text">{data.FirstBlock.text2}</div>
                    </div>
                </div>
            </div>
            <div id="howItWorks">
                <div className="t2">How it works.</div>
                <div className="blocks flex_container__column">
                    {data.SecondBlock.map((item, index) => (
                        <div className="block flex_container__column">
                            <div className="title flex_container">
                                <div className="number container__centered">
                                    {index + 1}
                                </div>
                                <div className="text">{item.title}</div>
                            </div>
                            <div className="t3">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="third_block" className="grid_container__halved">
                <div className="left_block container__centered">
                    <div className="t2">
                        {data.ThirdBlock}
                    </div>
                    <div className="hand_gif hand_gif_tablet">
                        <JsonViewer src={pinkHandGif}/>
                    </div>
                </div>
                <div className="hand_gif hand_gif_desktop">
                    <JsonViewer src={handGif}/>
                </div>
            </div>
            <div id="fourth_block">
                <img className="founder_img" src={Alexander}/>
                <img className="commas_img" src={commas}/>
                <div className="content flex_container__column">
                    <div className="t3">
                        {data.FourthBlock}
                    </div>
                    <div className="sub_title flex_container">
                        <img className="founder_img__mobile" src={Alexander}/>
                        <div className="founder_text">
                            Alexander Khopersky<br/>
                            Founder&CEO, Attina
                        </div>
                    </div>
                </div>
            </div>
            <div id="fifth_block">
                <div className="t3">
                    {data.FifthBlock}
                </div>
            </div>
            <FixedLeftBlock lightTheme data={data.SixthBlock}/>
            <div id="seventh_block" className="grid_container__halved">
                <JsonViewer src={interfaceGif}/>
                <div className="info flex_container__column">
                    <a className="logo mobile" href="/">
                        <img src={logo}/>
                    </a>
                    <div className="t2">{data.SeventhBlock.title}</div>
                    <div className="text">{data.SeventhBlock.text_1}<br/>{data.SeventhBlock.text_2}</div>
                    <a>
                        <button onClick={handleOpenPopup} className="desktop mobile_button">Get Started</button>
                        <MobileButton onClick={handleOpenPopup} accent text={"Get Started"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
