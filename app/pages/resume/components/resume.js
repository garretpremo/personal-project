import React from "react";
import ResumeHeader from "./resume-header";
import ResumeLeftPane from "./resume-left-pane/resume-left-pane";
import ResumeRightPane from "./resume-right-pane";

export default function Resume() {
    return (
        <div className="resume">
            <ResumeHeader/>
            <main>
                <ResumeLeftPane/>
                <ResumeRightPane/>
            </main>
        </div>
    );
}