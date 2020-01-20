import React from "react";
import PropTypes from "prop-types";
import photo from "../../images/depositphotos_28907987-stock-photo-colosseum-in-rome.jpg"


const Select = (props) => {
    debugger
    return(
        <div>
            <p><strong>{props.title}</strong></p>
            <img src={photo}/>
            <div>
            <select name="test" value={props.result5} onChange={props.onSelectChange}>
                <option value="Пантион">Пантион</option>
                <option value="Великий Манеж">Великий Манеж</option>
                <option value="Колизей">Колизей</option>
                <option value="Большой цирк">Большой цирк</option>
            </select>
                </div>
        </div>
    )
};

Select.propTypes = {
    title: PropTypes.string
};

Select.defaultProps = {
    title: "4.Сейчас это здание представляет собой руины. А при его открытии в 80 году н.э., это был самый большой римский стадион. Как он называется?"
};

export default Select;