import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import ManageQuestion from '../components/manageQuestion/ManageQuestion';
import NewQuestion from '../components/newQuestion/NewQuestion';
import Seminar from '../components/seminars/Seminar';
import TrainingPlan from '../components/trainingPlan/TrainingPlan';
class Direction extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/training-plan" component={TrainingPlan}></Route>
                <Route exact path="/faq" component={FAQ}></Route>
                <Route exact path="/new-question" component={NewQuestion}></Route>
                <Route exact path="/seminars" component={Seminar}></Route>
                <Route exact path="/manage-question" component={ManageQuestion}></Route>
                <Route path="/" component={Footer}></Route>
            </Fragment>
        );
    }
}

export default Direction;