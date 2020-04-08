import React, {Component} from "react";
import TextInput from "../AnswersComponents/TextInput";
import RadioButton from "../AnswersComponents/RadioButton";
import Modal from "../ModalWindow/ModalWindow";
import Checkbox from "../AnswersComponents/Checkbox";
import Select from "../AnswersComponents/Select";
import {Redirect} from "react-router-dom";
import dataJson from "../../JSON/tsconfig";

class PageQuestions extends Component {

    state = {
        pointsCheckbox: []
    };

    addPointCheckbox = (checkpoint, i, index) => {
        const arr = [...this.state.pointsCheckbox];
        arr[i] = checkpoint;
            this.setState({pointsCheckbox: arr}
            );
            let point = arr.reduce((a,currentItem) => typeof currentItem === 'number' ? a + currentItem : a, 0);
            this.props.addPoint(index, point)
        };


         questions = dataJson.data.map((e, i) => <div key={i}  className="container">

                <strong>{++i+"."}{e.question}</strong>

                <TextInput addPoint={this.props.addPoint} index={i} type={e.type} answers={e.answersArr} user={this.props.state.storageState} addStateUser={this.props.addStateUser}/>

                <RadioButton type={e.type} name={e.name} answers={e.answersArr} index={i} addPoint={this.props.addPoint} />

                <Checkbox type={e.type} answers={e.answersArr} index={i} addPointCheckbox={this.addPointCheckbox} />

                <Select type={e.type} answers={e.answersArr} index={i} addPoint={this.props.addPoint} />
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
                <Modal isOpenModal={this.props.state.isOpenModal} setIsCloseModal={this.props.setIsCloseModal}/>
            </div>
        )
    }
}


export default PageQuestions;