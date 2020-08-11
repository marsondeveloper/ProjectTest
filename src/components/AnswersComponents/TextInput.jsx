import React, {useState} from "react";



const TextInput = (props) => {

   const [textInput, setInput] = useState( '');

   let onChangeText = ({target: {value}}, answer, cost) => {
        setInput([value]);
        const pointText = value === answer ? cost : 0;
        props.addPoint(props.index, pointText);
        debugger
        props.addUserAnswer(props.index, value)
    };

   let onChange = (e) => {
      onChangeText(e, props.answers[0].answer, props.answers[0].point)
    };

        if (props.type !== "text") {
            return null
        }
        return (

            <div>
                <div><p><input placeholder={"Введите ответ"} name="textInput" type={props.type} value={textInput}
                               onChange={onChange}/></p></div>
            </div>
        )
    };



export default TextInput;