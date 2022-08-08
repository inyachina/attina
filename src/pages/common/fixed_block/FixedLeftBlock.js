import React from "react";
import './fixedblock.scss';
import f from '../../../assets/img/white_cover_icon_1.png'
export const FixedLeftBlock = (props) => {
    const isLightTheme = props.lightTheme;

    return (
        <div id="fixed_left_block"
             className={"grid_container__halved " + (isLightTheme ? "light_theme" : "dark_theme")}>

            <div className="wrapper">
                <div className="fixed-wrapper">
                    <div id="fixed_block" className="fixed flex_container__column">
                        <div className="t2">
                            {props.data.title}
                        </div>
                        <div className="subtitle">
                            {props.data.subtitle}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub_blocks flex_container__column">
                {props.data.content.map((item) => (
                    <div className="sub_block">
                        <div className={"content flex_container__column"}>
                            <div className="circle container__centered">
                                <img src={require(`../../../assets/img/${item.img}`)}/>
                            </div>
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="sub_title">
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
