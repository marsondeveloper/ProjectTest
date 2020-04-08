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

<<<<<<< HEAD
        let result = props.answers.map((q, i) => <div key={q.id}><label><input name={props.name} type={props.type} value={q.point} onChange={onChangeRadio}/>{q.answer}
=======
        let result = props.answers.map(q => <div key={q.id}><label><input name={props.name} type={props.type} value={q.point} onChange={onChangeRadio}/>{q.answer}
>>>>>>> d09f741a9b910e7e70cfd871cf964fc8eb2c8c49
        </label></div>);
        return (
            <div>
                <div>{result}</div>
            </div>
        )
    };



export default RadioButton;
