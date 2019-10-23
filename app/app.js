import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";

// global css
import './scss/main.scss';

// components
import Header from './components/header/header';
import TodoPage from './pages/todo-page/todo-page';
import HomePage from './pages/home-page/home-page';
import ResumePage from './pages/resume/resume-page';
import CheckersPage from './pages/checkers-page/checkers-page';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="app">
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/todo" component={TodoPage}/>
                    <Route path="/resume" component={ResumePage}/>
                    <Route path="/checkers" component={CheckersPage}/>
                </Switch>
            </div>
        );
    }
}