import React, {useEffect, useRef} from "react";
import './fixedblock.scss';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const FixedLeftBlock = (props) => {
    const isLightTheme = props.lightTheme;
    const elementRef = useRef(null)
    const q = gsap.utils.selector(elementRef)

    useEffect(() => {
        let tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".fixed_block",
                    start: "top 0",
                    end: "bottom bottom",
                    // scrub: 1, // scrub: 1
                    pin: true,
                    // markers: true
                }
            }
        );
    }, [])
    return (
        <div ref={elementRef}
             className={"fixed_left_block grid_container__halved " + (isLightTheme ? "light_theme" : "dark_theme")}>
            <div className="fixed_block fixed  flex_container__column">
                <div className="t2">
                    {props.data.title}
                </div>
                <div className="subtitle">
                    {props.data.subtitle}
                </div>
            </div>

            <div className="sub_blocks   flex_container__column">
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
