import React, {useState} from "react";


const RadioButton = (props) => {

    const [radiobutton, setRadio] = useState('');

   let onChangeRadio = ({target: {value}}) => {
       setRadio([value]);
        props.addPoint(props.index, +value)
    };

        if (!props.radiobutton) {
            return null
        }

        let result = props.radiobutton.map((q, i) => <div key={i}><label><input name='radiobutton' type='radio' value={q.bal} onChange={onChangeRadio}/>{q.answer}
        </label></div>);
        return (
            <div>
                <div>{result}</div>
            </div>
        )
    };



export default RadioButton;