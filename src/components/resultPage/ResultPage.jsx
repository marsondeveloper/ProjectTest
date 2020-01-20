import React from "react";
import './ResultPage.css';

const ResultPage = (props) => {

    let correctAnswers = ['2560', 'В Китае', {name1: 'Менделеев Д.И.', name2: 'Никола Тесла'  }, 'Колизей', 'Помпеи'];
debugger

    let correctAnswer1 = '2560';
    let correctAnswer2 = 'В Китае';
    let correctAnswer3 = 'Менделеев Д.И.';
    let correctAnswer4 = 'Никола Тесла';
    let correctAnswer5 = 'Колизей';
    let correctAnswer6 = 'Помпеи';

    let sum = 0;
    if(correctAnswer1 === props.result1){
        sum++
    }if(correctAnswer2 === props.result2){
        sum++
    }if(correctAnswer3 === props.result3 && correctAnswer4 === props.result4) {
        sum++
    }if(correctAnswer5 === props.result5) {
        sum++
    }if(correctAnswer6 === props.result6) {
        sum++
    }
debugger
    return(
        <div>
            <div className={"test"}>{correctAnswer1 === props.result1 && correctAnswer2 === props.result2 &&
                  correctAnswer3 === props.result3 && correctAnswer4 === props.result4 &&
                  correctAnswer5 === props.result5 && correctAnswer6 === props.result6  ? "Тест пройден" : "Тест не пройден"}</div>
            <div className={"sum"}>Количество правильных ответов: {sum}</div>
            <div>Правильные ответы:<ol>
                                       <li>{correctAnswer1}</li>
                                       <li>{correctAnswer2}</li>
                                       <li>{correctAnswer3},{correctAnswer4}</li>
                                       <li>{correctAnswer5}</li>
                                       <li>{correctAnswer6}</li>
                                   </ol>
                                    </div>
        </div>
    )
};





export default ResultPage;