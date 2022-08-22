import React from "react";
import './fixedblock.scss';

export const FixedLeftBlock = (props) => {
    const isLightTheme = props.lightTheme;

    return (
        <div className={"fixed_left_block grid_container__halved " + (isLightTheme ? "light_theme" : "dark_theme")}>

            <div className="wrapper">
                <div className="fixed-wrapper">
                    <div className="fixed_block fixed flex_container__column">
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
                                {item.img && <img src={require(`../../../assets/img/${item.img}`)}/>}
                            </div>
                            <div className="text">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="sub_title">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
