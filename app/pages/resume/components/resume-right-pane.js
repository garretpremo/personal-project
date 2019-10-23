import React from "react";
import ResumeSkill from "./resume-skill/resume-skill";

export default function ResumeRightPane() {
    return (
        <div className="resume-right-pane">
            {/* Education */}
            <h2>
                <i className="fa fa-user-graduate"></i>
                <span>Education</span>
            </h2>
            <strong>B.S. Computer Science</strong>
            <i>Rensselaer Polytechnic Institute</i>
            <span>Troy, NY / 2019</span>

            {/* Skills */}
            <h2>
                <i className="fa fa-flask"></i>
                <span>Skills</span>
            </h2>
            <h4>Programming</h4>
            <div className="skills">
                <ResumeSkill skillName="Javascript" stars="5"/>
                <ResumeSkill skillName="HTML" stars="5"/>
                <ResumeSkill skillName="CSS/sass" stars="5"/>
                <ResumeSkill skillName="Java" stars="3.5"/>
                <ResumeSkill skillName="C#" stars="3.5"/>
                <ResumeSkill skillName="C++" stars="4"/>
                <ResumeSkill skillName="Python" stars="4.5"/>
                <ResumeSkill skillName="SQL" stars="3.5"/>
            </div>
            <h4>Design</h4>
            <div className="skills">
                <ResumeSkill skillName="Adobe Photoshop" stars="5"/>
                <ResumeSkill skillName="Adobe Illustrator" stars="4.5"/>
                <ResumeSkill skillName="Balsamiq" stars="4"/>
            </div>

            {/* Technologies */}
            <h2>
                <i className="fa fa-code-branch"></i>
                <span>Technologies</span>
            </h2>
            <div className="skills">
                <ResumeSkill skillName="Javascript ES6" stars="5"/>
                <ResumeSkill skillName="AngularJS" stars="5"/>
                <ResumeSkill skillName="Angular 2+" stars="4"/>
                <ResumeSkill skillName="React" stars="4.5"/>
                <ResumeSkill skillName="Vue" stars="4.5"/>
                <ResumeSkill skillName="Webpack" stars="4"/>
                <ResumeSkill skillName="Git" stars="5"/>
                <ResumeSkill skillName="Websockets" stars="4.5"/>
            </div>
        </div>
    );
}