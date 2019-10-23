import React, {Component} from "react";
import Resume from "./components/resume";
import "./resume.scss";

export default class ResumePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume-page">
                <Resume/>
            </div>
        );
    }
}