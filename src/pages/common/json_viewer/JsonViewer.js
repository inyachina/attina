import React from "react";
import './jsonViewer.scss';
import {Player} from "@lottiefiles/react-lottie-player";

export const JsonViewer = (props) => {
    return (
        <div className="json_container__relative">
            <div className="json_container__absolute">
                <Player autoplay
                        loop
                        src={props.src}
                        style={{
                            transform: props.mirrored ? 'rotateY(-180deg)' : 'auto',
                        }}/>
            </div>
        </div>
    )
}
