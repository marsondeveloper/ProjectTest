import React from "react";
import './ResultPage.css';
import dataJson from "../../JSON/tsconfig";


const ResultPage = (props) => {
    
let copy = [...dataJson.data];
copy.forEach((v,i,arr) => props.points[i] == 1 ? delete arr[i] : arr[i]);

let rightAnswers = copy.map((e,i) => <div key={e.id}><p>{i+1+"."}&nbsp;{e.question}</p>
                                 {e.answersArr.filter(a => a.point > 0)
                                 .map(e => <ul key={e.id}>{e.answer}</ul>)}</div>);

                                                                                      
        return (
            <div>     
                {props.totalScores === rightAnswers.length ? <div className={"win"}><p>{"Тест пройден"}</p><br/>{"Вы ответили правильно на все вопросы!"}</div> :
                    <div><div className={"test"}><p>{"Тест не пройден "}</p><br/>{"Вы набрали - " + props.totalScores + " из " + rightAnswers.length + " баллов"}</div>
                    <div className={"answers"}><strong>{"Правильные ответы: "}</strong>{rightAnswers}</div></div>}
            </div>
        )
    };




export default ResultPage;