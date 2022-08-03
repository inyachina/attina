import React, {useEffect} from "react";
import './fixedblock.scss';

export const FixedLeftBlock = (props) => {
    const isLightTheme = props.lightTheme;
    useEffect(() => {
        // const amount = props.data.content.length;
        // const duration = 2 * (amount-1) + amount;
        // console.log(duration)
        //
        // ScrollMagicPluginGsap(ScrollMagic, gsap);
        // const controller = new ScrollMagic.Controller()
        // const scene = new ScrollMagic.Scene({
        //     triggerElement: "#fixed_block",
        //     triggerHook: "onLeave",
        //     duration: 300,
        // })
        //     .setPin("#fixed_block")
        //     .addTo(controller);
    })

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
                            <div className="circle"/>
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
