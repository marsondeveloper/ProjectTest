import React from "react";
import './ResultPage.css';




const ResultPage = (props) => {

        return (
            <div>
                {props.totalScores === 7 ? <div className={"win"}><p>{"Тест пройден"}</p><br/>{props.totalScores + " баллов"}</div> :
                    <div className={"test"}><p>{"Тест не пройден "}</p><br/>{"Ваш результат - " + props.totalScores + " балла из 7"}</div>}
            </div>
        )
    };




export default ResultPage;