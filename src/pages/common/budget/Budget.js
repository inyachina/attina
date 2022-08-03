import React, {useEffect, useRef, useState} from "react";
import './budget.scss';
import data from "../../../dataMainPage.json";
import logo from '../../../assets/img/logo.svg'

export const Budget = () => {
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
            <div className="info flex_container__column">
                <img src={logo}/>
                <div className="t2 title">
                    Our product <br/>
                    is available<br/>
                    to any budget <br/>
                    or lifestyle<br/>
                </div>
                <div className="sub_title">
                    {data.BudgetBlock.subTitle}
                </div>
            </div>
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
                        <div id={"perMonth"} className="t2 number">{perMonth}</div>
                        <div className="per">per month</div>
                    </div>
                    <div className="pipe"/>
                    <div id="perYear" className="text flex_container__column">
                        <div id={"perYear"} className="t2 number">{perYear}</div>
                        <div className="per">
                            per year<br/>
                            +first month free
                        </div>
                    </div>
                </div>
                <button>
                    Get protection
                </button>
                <div className="sub_title">
                    {data.BudgetBlock.endSubTitle}
                </div>
            </div>
        </div>)
}
