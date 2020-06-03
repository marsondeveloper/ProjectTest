import React from 'react';
import PageQuestions from "../PageQuestions/PageQuestions";
import {Route} from "react-router-dom";
import ResultPage from "../ResultPage/ResultPage";
import dataJson from "../../JSON/tsconfig"


class MainComponent extends React.Component {


    state = {
        points: [],
        totalScores: 0,
        isOpenModal: false,
        redirect: false,
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
               isOpenModal: true
           });
       };
       redirectPageResult = () => {
           this.setState({
               redirect: true
           });
       };
    result = () => {
        let filterPoints = this.state.points.filter((value) => value !== undefined);
        filterPoints.length === dataJson.data.length ? this.redirectPageResult() : this.setIsOpenModal();
        };
    setIsCloseModal = () => {
        this.setState({
            isOpenModal: false
        })
    };
    render(){
        return(
            <div>
                <Route path='/test' render={() => <PageQuestions state={this.state} addPoint={this.addPoint}
                                                                 setIsCloseModal={this.setIsCloseModal}
                                                                 result={this.result} 
                                                                 
                                                                 />} />

                <Route path='/result' render={() => <ResultPage rightAnswers={this.rightAnswers} totalScores={this.state.totalScores}/>}/>
            </div>
        )
    }
}
export default MainComponent;