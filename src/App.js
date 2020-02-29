import React from 'react';
import './App.css';
import PageQuestions from "./components/pageQuestions/PageQuestions";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ResultPage from "./components/resultPage/ResultPage";
import MainComponent from "./components/MainComponent";



const App = (props) => {

        return (
            <BrowserRouter>
                 <Redirect to={'/test'}/>
            <div className="app-wrapper">
                    <div className='header'><h1>Тест по Всемирной истории</h1></div>
                    <div className='app-wrapper-content'>
                        <MainComponent/>
                    </div>
                </div>
            </BrowserRouter>
        );
    };



export default App;
