import React from 'react';
import PageQuestions from "../PageQuestions/PageQuestions";
import {Route} from "react-router-dom";
import ResultPage from "../ResultPage/ResultPage";


class MainComponent extends React.Component {

    state = {
        points: [],
        totalScores: 0,
        isOpen: false,
        redirect: false
    };
        addPoint = (i, point) => {
            const arr = [...this.state.points];
            arr[i] =  point;
            this.setState({points: arr});
            this.totalPoints()
        };
       totalPoints = () => {
            this.setState((state) => {
               return { totalScores: state.points.reduce((a,currentItem) => typeof currentItem === 'number' ? a + currentItem : a, 0)}
            })
        };
       setIsOpenModal = () => {
           this.setState({
               isOpen: true
           });
       };
       redirectPageResult = () => {
           this.setState({
               redirect: true
           });
       };
    result = () => {
        let filterPoints = this.state.points.filter((value) => value !== undefined);
        filterPoints.length === 5 ? this.redirectPageResult() : this.setIsOpenModal();
        };
    setIsCloseModal = () => {
        this.setState({
            isOpen: false
        })
    };
    data = [{question: 'В каком году до нашей эры построили пирамиду Хеопса?', input: {text: '2560', right: 1}},
        {
            question: 'Где была построена самая длинная стена в мире?',
            radiobutton: [{answer: 'В Китае', bal: 1}, {answer: 'В Украине', bal: 0}, {
                answer: 'В США',
                bal: 0
            }]
        },
        {
            question: ' Какой народ в древности стал изготавливать впервые сахар из сахарного тростника?',
            select: [{answer: 'Египтяне'}, {answer: 'Финикийцы'}, {answer: 'Индийцы'}, {answer: 'Китайцы'}], correctAnswer: 'Индийцы'
        },
        {
            question: 'Выберите двух выдающихся учёных конец 19-го и начало 20-го веков.',
            checkbox: [{id: 0, answer: 'Виктор Цой', name:'Victor', bal: 0}, {id: 1, answer: 'Менделеев Д.И.', name:'Mendeleev', bal: 0.5},
                       {id: 2, answer: 'Наполеон Бонапарт', name:'Napoleon', bal: 0}, {id: 3, answer: 'Никола Тесла', name:'Tesla', bal: 0.5}]
        },
        {
            question: 'Сейчас это здание представляет собой руины. А при его открытии в 80 году н.э., это был самый большой римский стадион. Как он называется?',
            select: [{answer: 'Пантион'}, {answer: 'Великий Манеж'}, {answer: 'Колизей'}, {answer: 'Большой цирк'}], correctAnswer: 'Колизей'
        },
        {
            question: 'Древнеримский город недалеко от Неаполя, в регионе Кампания, погребённый под слоем вулканического пепла в результате извержения Везувия 24 августа 79 года?',
            radiobutton: [{answer: 'Александрия', bal: 0}, {
                answer: 'Помпеи',
                bal: 1
            }, {answer: 'Мессина', bal: 0}, {answer: 'Рим', bal: 0}]
        }];
    render(){
        return(
            <div>
                <Route path='/test' render={() => <PageQuestions data={this.data} state={this.state} addPoint={this.addPoint} setIsCloseModal={this.setIsCloseModal} result={this.result}/>}/>
                <Route path='/result' render={() => <ResultPage state={this.state}/>}/>
            </div>
        )
    }
}
export default MainComponent;