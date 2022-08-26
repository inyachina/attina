import React from "react";
import './fixedblock.scss';

export const SubBlock = ({item}) => {
    return (<div className="fixed_sub_block">
        <div className={"content"}>
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
    </div>)
}
