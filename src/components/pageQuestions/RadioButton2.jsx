import React from "react";
import PropTypes from "prop-types";



const RadioButton2 = (props) => {
    debugger
    return(
        <div>
            <div><strong>{props.title}</strong></div>
            <p><input name="test" type="radio" value='Александрия' onChange={props.onRadioButtonChange2}/>Александрия</p>
            <p><input name="test" type="radio" value='Помпеи' onChange={props.onRadioButtonChange2}/>Помпеи</p>
            <p><input name="test" type="radio" value='Мессина' onChange={props.onRadioButtonChange2}/>Мессина</p>
            <p><input name="test" type="radio" value='Рим' onChange={props.onRadioButtonChange2}/>Рим</p>
        </div>
    )
};

RadioButton2.propTypes = {
    title: PropTypes.string,

};

RadioButton2.defaultProps = {
    title: "5.Древнеримский город недалеко от Неаполя, в регионе Кампания, погребённый под слоем вулканического пепла в результате извержения Везувия 24 августа 79 года?"
};

export default RadioButton2;