import React from "react";
import arrowLearnMore from '../../assets/img/arrowLearnMore.svg'
import phoneGif from '../../assets/img/phone_gif.svg'
import triangle_1 from '../../assets/img/triangle_1.svg'
import triangle_2 from '../../assets/img/triangle_2.svg'
import triangle_3 from '../../assets/img/triangle_3.svg'
import founder from '../../assets/img/founder.jpg'
import "./about.scss";
import logo from "../../assets/img/logo.svg";
import data from '../../dataAboutUsPage.json';
import {Budget} from "../common/budget/Budget";
import {FixedLeftBlock} from "../common/fixed_block/FixedLeftBlock";

export const AboutPage = () => {
    return (
        <div id="about_page" className="main_container">
            <div className="t1 main_title main_margin_top">
                Enjoy stability doing<br/> what you love.
            </div>
            <img className="arrow" src={arrowLearnMore}/>
            <div className="block_phone">
                <div className="container__relative container__centered">
                    <img className="phone_gif" src={phoneGif}/>
                    <div className="tip shopping">
                        <span className="t3">Shopping</span>
                        <img src={triangle_1}/>
                    </div>
                    <div className="tip feel_safe">
                        <span className="t3">Feel safe</span>
                        <img src={triangle_3}/>
                    </div>
                    <div className="tip travelling">
                        <span className="t3">Travelling</span>
                        <img src={triangle_2}/>
                    </div>
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
            <div id="second_block">
                <div className="t2">How we do it.</div>
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
                </div>
                <div></div>
            </div>
            <div id="fourth_block" className="grid_container__halved">
                <div className="founder_img"/>
                <div className="content flex_container__column">
                    <div className="t3">
                        {data.FourthBlock}
                    </div>
                    <div className="sub_title">
                        Alexander Khopersky<br/>
                        Founder&CEO Attina
                    </div>
                </div>
            </div>
            <div id="fifth_block">
                <div className="t3">
                    {data.FifthBlock}
                </div>
            </div>
            <FixedLeftBlock lightTheme data={data.SixthBlock}/>
            <Budget/>
        </div>
    )
}