import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MainComponent from "./components/MainComponent/MainComponent";



const App = () => {

        return (
            <BrowserRouter>
                <Route exact path='/'  render={()=><Redirect to={'/test'}/>}/>
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
