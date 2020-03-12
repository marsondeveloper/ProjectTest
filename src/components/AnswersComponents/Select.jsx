import React, {useState} from "react";



const Select = (props) => {

    const [select, setSelect] = useState('');

   let onChangeSelect = ({target: {value}}) => {
        setSelect([value]);
        props.addPoint(props.index, +value)
    };

   let onChange = (e) => {
        onChangeSelect(e)
    };

        if (!props.select) {
            return null
        }

        let result = props.select.map((q, i) => <option key={i} value={q.point}>{q.answer}</option>);
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