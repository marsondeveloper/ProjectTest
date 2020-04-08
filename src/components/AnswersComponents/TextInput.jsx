import React, {useState, useMemo} from "react";


const TextInput = (props) => {

    const [textInput, setInput] = useState( props.user || '');

    useMemo(()=> setInput(props.user), [props.user]);


   let onChangeText = ({target: {value}}, answer, cost) => {
       props.addStateUser(props.index, value);
        setInput([value]);
        const pointText = value === answer ? cost : 0;
        props.addPoint(props.index, pointText)
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