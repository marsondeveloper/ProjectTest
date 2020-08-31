import React, {useState} from "react";
import './AnswersComponents.css';

const RadioButton = (props) => {

    const [radiobutton, setRadio] = useState( '');

   let onChangeRadio = ({target: {value}}, answer) => {
       setRadio([value]);
        props.addPoint(props.index, +value)
    };

        if (props.type !== "radio") {
            return null
        }


        let result = props.answers.map(q => <div className={"input"} key={q.id}><label><input name={props.name} 
                                                                     type={props.type} value={q.point} onChange={(e) => onChangeRadio(e, q.answer)}/>{q.answer}

        </label></div>);
        return (
            <div>
                <div>{result}</div>
            </div>
        )
    };



export default RadioButton;
