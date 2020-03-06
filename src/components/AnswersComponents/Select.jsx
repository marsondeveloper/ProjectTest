import React, {useState} from "react";



const Select = (props) => {

    const [select, setSelect] = useState('');

   let onChangeSelect = ({target: {value}}, correctAnswer) => {
        setSelect([value]);
        let point = value === correctAnswer ? 1 : 0;
            props.addPoint(props.index, point)
    };

   let onChange = (e) => {
        onChangeSelect(e, props.correctAnswer)
    };

        if (!props.select) {
            return null
        }

        let result = props.select.map((q, i) => <option key={i} value={q.answer}>{q.answer}</option>);
        return (
            <div>
                <div>
                    <select name="select" value={select} onChange={onChange}>
                        {result}
                    </select>
                </div>
            </div>
        )
    };



export default Select;