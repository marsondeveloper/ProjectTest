import React from "react";
import './ResultPage.css';




const ResultPage = (props) => {
        return (
            <div>
                {props.state.totalScores === 7 ? <div className={"win"}><p>{"Тест пройден"}</p><br/>{props.state.totalScores + " баллов"}</div> :
                    <div className={"test"}><p>{"Тест не пройден "}</p><br/>{"Ваш результат - " + props.state.totalScores + " балла из 7"}</div>}
            </div>
        )
    };




export default ResultPage;