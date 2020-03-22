import React, {useState} from "react";


const RadioButton = (props) => {

    const [radiobutton, setRadio] = useState( '');

   let onChangeRadio = ({target: {value}}) => {
       setRadio([value]);
        props.addPoint(props.index, +value)
    };

        if (props.type !== "radio") {
            return null
        }

        let result = props.answers.map((q, i) => <div key={i}><label><input name={props.name} type={props.type} value={q.point} onChange={onChangeRadio}/>{q.answer}
        </label></div>);
        return (
            <div>
                <div>{result}</div>
            </div>
        )
    };



export default RadioButton;