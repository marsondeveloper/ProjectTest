import React from "react";
import Modal from "../modalWindow/ModalWindow";
import PropTypes from "prop-types";



const RadioButton = (props) => {
debugger
    return(
        <div>
            <div><strong>{props.title}</strong></div>
            <div><p><input name="test" type="radio" value='В Китае' onChange={props.onRadioButtonChange}/>В Китае</p></div>
            <div><p><input name="test" type="radio" value='В США' onChange={props.onRadioButtonChange}/>В США</p></div>
            <div><p><input name="test" type="radio" value='В Украине' onChange={props.onRadioButtonChange}/>В Украине</p></div>
        </div>
    )
};

RadioButton.propTypes = {
    title: PropTypes.string,

};

RadioButton.defaultProps = {
    title: "2.Где была построена самая длинная стена в мире?"
};

export default RadioButton;