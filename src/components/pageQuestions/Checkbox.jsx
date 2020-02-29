import React, {useState} from "react";

const Checkbox = (props) => {

    const [checkbox, setChecked] = useState([]);

    let onChangeCheckbox = ({target: {checked}}, i, point) => {
        setChecked([checked]);
        let check = checked ? point : 0;
        props.addPointCheckbox(check, i, props.index)
    };

    if (!props.checkbox) {
        return null
    }

    let result = props.checkbox.map((q, i) => <div key={i}><label><input type="checkbox" name={q.name} value={q.answer}
                                                                         onChange={(e) => onChangeCheckbox(e, i, q.bal)}/>{q.answer}
    </label><br/></div>);

    return (
        <div>
            {result}
        </div>
    )
};


export default Checkbox;