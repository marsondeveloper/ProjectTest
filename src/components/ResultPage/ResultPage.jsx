import React from "react";
import './ResultPage.css';
import dataJson from "../../JSON/tsconfig";



const ResultPage = (props) => {

    let rightAnswers = dataJson.data.map((e,i) => e.answersArr.filter(a => a.point > 0).map(e => <h3 key={e.id}>{i+1}.{e.answer}</h3>));

        return (
            <div>
                {props.totalScores === rightAnswers.length ? <div className={"win"}><p>{"Тест пройден"}</p><br/>{"Вы ответили правильно на все вопросы!"}</div> :
                    <div><div className={"test"}><p>{"Тест не пройден "}</p><br/>{"Ваш результат - " + props.totalScores + " из " + rightAnswers.length}</div><div><h2>{"Правильные ответы:"}</h2>{rightAnswers}</div></div>}
            </div>
        )
    };




export default ResultPage;