import React, {useState, useMemo} from "react";



const Select = (props) => {

    const [select, setSelect] = useState(props.user || '');

    /*useMemo(()=> setSelect(props.user), [props.user]);*/

   let onChangeSelect = ({target: {value}}) => {
debugger;

       props.addStateUser(props.index, value);
        setSelect([value]);
        props.addPoint(props.index, parseInt(value))
    };



   let onChange = (e) => {
       debugger
        onChangeSelect(e)
    };

        if (props.type !== "select") {
            return null
        }

        let result = props.answers.map((q, i) => <option key={q.id} value={[q.point, q.answer]}>{q.answer}</option>);
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