import React from "react";
import PropTypes from "prop-types";





const TextInput = (props) => {
debugger

    return(
        <div>
            <div><strong>{props.title}</strong>
                <div><p><input placeholder={"Введите ответ"} type="text" value={props.result1} onChange={props.onInputChange}/></p></div>
            </div>
        </div>
    )
};

TextInput.propTypes = {
    title: PropTypes.string,

};

TextInput.defaultProps = {
    title: "1.В каком году до нашей эры построили пирамиду Хеопса?"
};

export default TextInput;