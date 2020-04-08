import React, {useState} from "react";



const Select = (props) => {

    const [select, setSelect] = useState( '');


   let onChangeSelect = ({target: {value}}) => {
        setSelect([value]);
        props.addPoint(props.index, parseInt(value))
    };



   let onChange = (e) => {
        onChangeSelect(e)
    };

        if (props.type !== "select") {
            return null
        }

<<<<<<< HEAD
        let result = props.answers.map((q, i) => <option key={q.id} value={[q.point, q.answer]}>{q.answer}</option>);
=======
        let result = props.answers.map(q => <option key={q.id} value={[q.point, q.answer]}>{q.answer}</option>);
>>>>>>> d09f741a9b910e7e70cfd871cf964fc8eb2c8c49
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
