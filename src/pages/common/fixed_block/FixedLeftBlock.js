import React, {useEffect, useRef, useState} from "react";
import './fixedblock.scss';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from "gsap";
import {SubBlock} from "./SubBlock";

gsap.registerPlugin(ScrollTrigger);

export const FixedLeftBlock = ({data, lightTheme}) => {
    const [lastBlocks, setLastBlocks] = useState([])
    const [blocks, setBlocks] = useState([])
    const isLightTheme = lightTheme;
    const elementRef = useRef(null)
    const q = gsap.utils.selector(elementRef)

    useEffect(() => {
        const len = data.content.length;
        setLastBlocks([...data.content.slice(len - 2, len)])
        setBlocks([...data.content.slice(0, len - 2)])
        setBlocks([...data.content])

        let tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".fixed_left_block",
                    start: "top 0",
                    end: "bottom top",
                    pin: '.fixed_block',
                    // markers: true
                }
            }
        );
        return () => {
            setBlocks([])
            setLastBlocks([])
        };
    }, [])
    return (

        <>
            <div className={"fixed_left_block grid_container__halved " + (isLightTheme ? "light_theme" : "dark_theme")}>
                <div className="fixed_block fixed  flex_container__column">
                    <div className="t2">
                        {data.title}
                    </div>
                    <div className="subtitle">
                        {data.subtitle}
                    </div>
                </div>
                <div className="sub_blocks flex_container__column">
                    {blocks.map((item) => (
                        <SubBlock item={item}/>
                    ))}
                </div>

            </div>
            <div className={"fixed_left_block grid_container__halved " + (isLightTheme ? "light_theme" : "dark_theme")}>
                <div/>
                <div className={"sub_blocks flex_container__column"}>
                    {lastBlocks.map((item) => (
                        <SubBlock item={item}/>
                    ))}
                </div>
            </div>
        </>
    )
}
