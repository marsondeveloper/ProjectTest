import React from "react";
import './ResultPage.css';




const ResultPage = (props) => {

        let correctAnswers = ['2560', 'В Китае', 'Никола Тесла', 'Менделеев Д.И.', 'Колизей', 'Помпеи'];
        debugger
    let answers = correctAnswers.map((e,i) =>
        <p key={i}>{i+1}.&nbsp;{e}</p>
    );


        let sum = 0;
        if (correctAnswers[0] === props.result1) {
            sum++
        }
        if (correctAnswers[1] === props.result2) {
            sum++
        }
        if (correctAnswers[2] === props.result3 && correctAnswers[3] === props.result4) {
            sum++
        }
        if (correctAnswers[4] === props.result5) {
            sum++
        }
        if (correctAnswers[5] === props.result6) {
            sum++
        }
        debugger

        return (
            <div>
                <div
                    className={"test"}>{correctAnswers[0] === props.result1 && correctAnswers[1] === props.result2 &&
                correctAnswers[2] === props.result3 && correctAnswers[3] === props.result4 &&
                correctAnswers[4] === props.result5 && correctAnswers[5] === props.result6 ? "Тест пройден" : "Тест не пройден"}</div>
                <div className={"sum"}>Количество правильных ответов: {sum}</div>
                <div>Правильные ответы: {answers}</div>
            </div>
        )
    };



export default ResultPage;