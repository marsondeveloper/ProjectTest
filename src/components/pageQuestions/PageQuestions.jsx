import React, {Component} from "react";
import TextInput from "./TextInput";
import RadioButton from "./RadioButton";
import Modal from "../modalWindow/ModalWindow";
import "../modalWindow/Button.css";
import Checkbox from "./Checkbox";
import Select from "./Select";
import RadioButton2 from "./RadioButton2";
import {Redirect} from "react-router-dom";


class PageQuestions extends Component {

    state = {
        pointsCheckbox: []
    };

    addPointCheckbox = (ball, i, index) => {
        const arr = [...this.state.pointsCheckbox];
        arr[i] = ball;
            this.setState({pointsCheckbox: arr}
            );
            let point = arr.reduce((a,currentItem) => typeof currentItem === 'number' ? a + currentItem : a, 0);
            this.props.addPoint(index, point)
        };

         questions = this.props.data.map((e, i) => <div key={i} className="container">
                <strong>{i+1+"."}{e.question}</strong>
                <TextInput addPoint={this.props.addPoint} index={i} input={e.input}/>

                <RadioButton radiobutton={e.radiobutton} index={i} addPoint={this.props.addPoint}/>

                <Checkbox checkbox={e.checkbox} index={i} addPointCheckbox={this.addPointCheckbox}/>

                <Select select={e.select} index={i} correctAnswer={e.correctAnswer} addPoint={this.props.addPoint}/>

                <RadioButton2 radiobutton2={e.radiobutton2} index={i} addPoint={this.props.addPoint}/>
            </div>
        );
    render() {
        if (this.props.state.redirect) {
            return <Redirect to={'/result'}/>
        }
        return (
            <div>
                {this.questions}
                <div className="container">
                    <button className='btn' onClick={this.props.result}>Ответить</button>
                </div>
                <Modal isOpen={this.props.state.isOpen} setIsCloseModal={this.props.setIsCloseModal}/>
            </div>
        )
    }
}


export default PageQuestions;