import React, {useState} from "react";


const TextInput = (props) => {

    const [textInput, setInput] = useState('');

   let onChangeText = ({target: {value}}, answer, cost) => {
        setInput([value]);
        const point = value === answer ? cost : 0;
        props.addPoint(props.index, point)
    };

   let onChange = (e) => {
      onChangeText(e, props.input.text, props.input.point)
    };

        if (!props.input) {
            return null
        }
        return (
            <div>
                <div><p><input placeholder={"Введите ответ"} name="textInput" type="text" value={textInput}
                               onChange={onChange}/></p></div>
            </div>
        )
    };



export default TextInput;