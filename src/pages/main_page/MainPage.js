import React from "react";
import {Intro} from "./components/intro/Intro";
import data from "../../dataMainPage.json";
import {Blocks} from "./components/blocks/Blocks";
import {Budget} from "../common/budget/Budget";
import {Faq} from "./components/faq/Faq";
import {WarningPopup} from "../common/popup/WarningPopup";

export const MainPage = () => {
    return (
        <div className="main_container">
            <Intro data={data.Intro} links={data.Links}/>
            <Blocks data={data}/>
            <Budget />
            <Faq/>
        </div>
    )
}
