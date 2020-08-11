import React, {useState} from "react";



const Select = (props) => {

    const [select, setSelect] = useState('');

   let onChangeSelect = ({target: {value}}) => {
        setSelect(value);
        props.addPoint(props.index, parseInt(value));
        props.addUserAnswer(props.index, value.slice(2))
    };


   let onChange = (e) => {
        onChangeSelect(e)
    };

        if (props.type !== "select") {
            return null
        }

        let result = props.answers.map(q => <option key={q.id} value={[q.point, q.answer]}>{q.answer}</option>);

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
