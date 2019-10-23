import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./home-page.scss";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: null
        }
        axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=mindofdami&count=1").then(result => {
            this.setState({tweets: result.data});
        });
    }

    render() {
        return(
            <div className="home-page">
                <h1>Welcome!</h1>
                <div>{this.state.tweets}</div>
                <Link to="/todo">Go to Todo List</Link>
                <Link to="/resume">Go to Resume</Link>
            </div>
        );
    }
}