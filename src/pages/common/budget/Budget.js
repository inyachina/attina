import React, {useEffect, useRef, useState} from "react";
import './budget.scss';
import data from "../../../dataMainPage.json";
import tick from "../../../assets/img/budget_tick.svg"
import mobile_tick from "../../../assets/img/tick.svg"
import {MobileButton} from "../mobile_button/MobileButton";
import logo from "../../../assets/img/logo.svg";
import {handleOpenPopup} from "../popup/WarningPopup";

export const Budget = ({withoutText}) => {
    const [perMonth, setPerMonth] = useState()
    const [perYear, setPerYear] = useState()
    const checkedIndex = useRef();

    useEffect(() => {
        checkedIndex.current = localStorage.getItem("id_budget_option");
        if (!checkedIndex.current) checkedIndex.current = 0;

        setPerYear(data.BudgetBlock.values[checkedIndex.current].perYear)
        setPerMonth(data.BudgetBlock.values[checkedIndex.current].perMonth)

    }, [perMonth, perYear, checkedIndex])

    const handleClick = (item, index) => {
        setPerMonth(item.perMonth)
        setPerYear(item.perYear)
        if (!index) index = 0;
        localStorage.setItem("id_budget_option", index)
        checkedIndex.current = index

    }

    return (
        <div id="budget" className="grid_container__halved">
            {withoutText ??
            <>
                <div className="info_desktop desktop container__centered flex_container__column">
                    <div className="sub_title">
                        Unlike other outdated insurers, you choose the amount of coverage according to your
                        income. <br/>Yep,
                        It’s that easy.
                    </div>
                    <div className="flex_container__column gap-1rem">
                        {data.BudgetBlock.options.map((option) =>
                            <div className="option flex_container gap-1rem">
                                <img src={tick}/>
                                <div className="t3">{option}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="info_mobile mobile container__centered flex_container__column">

                    <div className="options flex_container__column">
                        {data.BudgetBlock.options.map((option) =>
                            <div className="option flex_container">
                                <img src={mobile_tick}/>
                                <div>{option}</div>
                            </div>
                        )}
                    </div>
                </div>
            </>
            }

            <div className="budget_calculator flex_container__column">

                <div className="title">{data.BudgetBlock.chooseLabel}</div>
                <div className="buttons flex_container">
                    {data.BudgetBlock.values.map((item, index) => (
                        <div onClick={() => handleClick(item, index)}
                             className="budget_button">
                            <input id={`budget_button${index}`}
                                   type="radio"
                                   name="budget_button"
                                   checked={index == checkedIndex.current}
                            />
                            <label htmlFor={`budget_button${index}`}
                                   onClick={() => {
                                       handleClick(item)
                                   }}>
                                {item.amount}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="price">
                    <div id="perMonth" className="text flex_container__column">
                        <div id={"perMonth"} className="number">
                            {perMonth}
                            <span className="per">/month</span>
                        </div>
                        <div className="first_month">
                            +first month free
                        </div>
                    </div>
                    <div className="pipe"/>
                    <div id="perYear" className="text flex_container__column">
                        <div id={"perYear"} className="number">
                            {perYear}
                            <span className="per">/year</span>
                        </div>
                        <div className="first_month">
                            +first month free
                        </div>
                    </div>
                </div>
                <button onClick={handleOpenPopup} className="desktop">
                    Get started
                </button>
                {/*<div className="get_protection_container">*/}
                <MobileButton onClick={handleOpenPopup} text={"Get started"}/>
                {/*</div>*/}
                <div className="sub_title">
                    {data.BudgetBlock.endSubTitle}
                </div>
            </div>
            <div className="info_mobile container__centered mobile flex_container__column">
                <img src={logo}/>
                <div className="t3">
                    Unlike other outdated insurers, you choose the amount of coverage according to your
                    income. Yep, It’s that easy.
                </div>
            </div>
        </div>
    )
}
