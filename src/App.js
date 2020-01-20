import React, {Component} from 'react';
import './App.css';
import PageQuestions from "./components/pageQuestions/PageQuestions";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ResultPage from "./components/resultPage/ResultPage";
import RadioButton from "./components/pageQuestions/RadioButton";
import Modal from "./components/modalWindow/ModalWindow";


class App extends React.Component {
    state = {
        result1: '',
        result2: '',
        result3: '',
        result4: '',
        result5: '',
        result6: '',
        isOpen: false,
        redirect: false
    };


    isRedirectYes = () => {
        this.setState({
            redirect: true
        })
    };

    isRedirectNo = () => {
        this.setState({
            redirect: false
        })
    };
    onInputChange = (e) => {
        this.setState({
            result1 : e.target.value
        })
    };
    onRadioButtonChange = (e) => {
        this.setState({
            result2: e.target.value
        })
    };
    onCheckboxChange1 = (e) => {
        this.setState({
            result3: e.target.value
        })
    };
    onCheckboxChange2 = (e) => {
        this.setState({
            result4: e.target.value
        })
    };
    onSelectChange = (e) => {
        this.setState({
            result5: e.target.value
        })
    };
    onRadioButtonChange2 = (e) => {
        this.setState({
            result6: e.target.value
        })
    };
    setIsOpenModal = () => {
        this.setState({
            isOpen: true
        })
    };
    setIsCloseModal = () => {
        this.setState({
            isOpen: false
        })
    };
    openResult = () => {
        debugger
        if (this.state.result1 === "" && this.state.result2 === "" && this.state.result3 === "" && this.state.result4 === "" && this.state.result5 === "" && this.state.result6 ) {
            return this.setIsOpenModal()
        }else{
             return this.isRedirectYes()
        }
    };
    clearAllFields = (e) => {
        this.setState({
            result1: "",
            result: "",
            result3: "",
            result4: "",
            result5: ""
        })
    };

    render() {
        return (
            <BrowserRouter>
                 <Redirect to={'/test'}/>
            <div className="app-wrapper">
                    <div className='header'><h1>Тест по Всемирной истории</h1></div>
                    <div className='app-wrapper-content'>
                        <Route path='/test' render={() => <PageQuestions redirect={this.state.redirect}
                                                                         result1={this.state.result1}
                                                                         result2={this.state.result2}
                                                                         result3={this.state.result3}
                                                                         result4={this.state.result4}
                                                                         result5={this.state.result5}
                                                                         result6={this.state.result6}
                                                                         onInputChange={this.onInputChange}
                                                                         isOpen={this.state.isOpen}
                                                                         onRadioButtonChange={this.onRadioButtonChange}
                                                                         onRadioButtonChange2={this.onRadioButtonChange2}
                                                                         setIsCloseModal={this.setIsCloseModal}
                                                                         openResult={this.openResult}
                                                                         onCheckboxChange1={this.onCheckboxChange1}
                                                                         onCheckboxChange2={this.onCheckboxChange2}
                                                                         clearAllFields={this.clearAllFields}
                                                                         onSelectChange={this.onSelectChange}/>}/>

                        <Route path='/result' render={() => <ResultPage
                                                                        result1={this.state.result1}
                                                                        result2={this.state.result2}
                                                                        result3={this.state.result3}
                                                                        result4={this.state.result4}
                                                                        result5={this.state.result5}
                                                                        result6={this.state.result6}/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
