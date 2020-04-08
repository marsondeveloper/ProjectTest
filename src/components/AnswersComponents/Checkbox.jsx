import React, {useState} from "react";

const Checkbox = (props) => {

    const [box, setChecked] = useState([]);

    let onChangeCheckbox = ({target: {checked}}, i, point) => {
        setChecked([checked]);
        let checkpoint = checked ? point : 0;
        props.addPointCheckbox(checkpoint, i, props.index)
    };

    if (props.type !== "checkbox") {
        return null
    }

<<<<<<< HEAD
    let result = props.answers.map((q, i) => <div key={q.id}><label><input type={props.type} name="checkbox" value={q.answer}
=======
    let result = props.answers.map((q, i) => <div key={q.id}><label><input type={props.type} name={q.name} value={q.answer}
>>>>>>> d09f741a9b910e7e70cfd871cf964fc8eb2c8c49
                                                                         onChange={(e) => onChangeCheckbox(e, i, q.point)}/>{q.answer}
    </label><br/></div>);

    return (
        <div>
            {result}
        </div>
    )
};


export default Checkbox;
