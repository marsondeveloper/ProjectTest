import React, {useState} from "react";
import './AnswersComponents.css';


const Checkbox = (props) => {
    const [box, setChecked] = useState([]);

    let onChangeCheckbox = ({target: {checked}}, i, point, answer) => {
        setChecked([checked]);
        let checkpoint = checked ? point : 0;
        props.addPointCheckbox(checkpoint, i, props.index);
        props.addAnswerCheckbox((checked ? answer : undefined), i, props.index)
    };

    if (props.type !== "checkbox") {
        return null
    }


    let result = props.answers.map((q, i) => <div className={"input"} key={q.id}><label><input type={props.type} name={q.name} value={q.answer}
                                                                         onChange={(e) => onChangeCheckbox(e, i, q.point, q.answer)}/>{q.answer}
    </label><br/></div>);

    return (
        <div>
            {result}
        </div>
    )
};


export default Checkbox;
