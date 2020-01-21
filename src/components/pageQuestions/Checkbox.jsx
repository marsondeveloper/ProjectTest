import React from "react";
import PropTypes from "prop-types";




const Checkbox = (props) => {
  return(
      <div><strong>{props.title}</strong>
          <p><input type="checkbox" name="a" value="Виктор Цой" onChange={props.onCheckboxChange1}/> Виктор Цой</p>
          <p><input type="checkbox" name="a" value="Менделеев Д.И." onChange={props.onCheckboxChange2}/> Менделеев Д.И.</p>
          <p><input type="checkbox" name="a" value="Наполеон Бонапарт" onChange={props.onCheckboxChange1}/> Наполеон Бонапарт</p>
          <p><input type="checkbox" name="a" value="Никола Тесла" onChange={props.onCheckboxChange1}/> Никола Тесла</p>
      </div>
  )
};

Checkbox.propTypes = {
    title: PropTypes.string
};

Checkbox.defaultProps = {
    title: "3.Выберите двух выдающихся учёных конец 19-го и начало 20-го веков."
};

export default Checkbox;