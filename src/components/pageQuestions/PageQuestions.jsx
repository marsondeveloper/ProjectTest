import React from "react";
import TextInput from "./TextInput";
import RadioButton from "./RadioButton";
import {Redirect} from "react-router-dom";
import Modal from "../modalWindow/ModalWindow";
import  "../modalWindow/Button.css";
import Checkbox from "./Checkbox";
import Select from "./Select";
import RadioButton2 from "./RadioButton2";


const PageQuestions = (props) => {
        debugger
        if (props.redirect) {
            return <Redirect to={'/result'}/>
        }

        return (
            <div>
                <div className="container">
                    <TextInput result1={props.result1} onInputChange={props.onInputChange}/>
                </div>
                <div className="container">
                    <RadioButton result2={props.result2} onRadioButtonChange={props.onRadioButtonChange}/>
                </div>
                <div className="container">
                    <Checkbox result3={props.result3} result4={props.result4} onCheckboxChange1={props.onCheckboxChange1} onCheckboxChange2={props.onCheckboxChange2}/>
                </div>
                <div className="container">
                    <Select result5={props.result5} onSelectChange={props.onSelectChange}/>
                </div>
                <div className="container">
                    <RadioButton2 result6={props.result6} onRadioButtonChange2={props.onRadioButtonChange2}/>
                </div>
                <div className="container">
                    <button className='btn' onClick={props.openResult}>Ответить</button>
                </div>
                <Modal isOpen={props.isOpen} setIsCloseModal={props.setIsCloseModal}/>
                {/*<div>
                    <button onClick={props.clearAllFields}>Очистить все поля</button>
                </div>*/}
            </div>
        )
    };



export default PageQuestions;