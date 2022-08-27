import React, {useEffect, useRef, useState} from "react";
import './fixedblock.scss';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from "gsap";
import {SubBlock} from "./SubBlock";

gsap.registerPlugin(ScrollTrigger);

export const FixedLeftBlock = (props) => {
    const elementRef = useRef(null)
    const q = gsap.utils.selector(elementRef)

    return (
        <div>
            <div className="desktop_title">
                <div className="t2">
                    {props.data.title}
                </div>
                <div className="subtitle">
                    {props.data.subtitle}
                </div>
            </div>
            <div className={"fixed_left_block  " + (props.lightTheme ? "light_theme" : "dark_theme")}>
                <div className="wrapper">
                    <div className="fixed-wrapper">
                        <div id="fixed_block" className="fixed fixed_block flex_container__column">
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
                        <SubBlock item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
