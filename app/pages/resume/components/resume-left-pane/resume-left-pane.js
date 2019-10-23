import React from "react";
import './resume-left-pane.scss';

export default function ResumeLeftPane() {
    return (
        <div className="resume-left-pane">
            <div>
                {/* Objective */}
                <h2>Objective</h2>
                <p>
                    <span>Ambitious Software Developer with 5+ years of experience in website development, </span>
                    <span>and 3+ years of experience in software development. Constantly looking to improve upon code </span>
                    <span>to create a better experience for the user <i>and</i> other developers. Someday hoping to obtain the</span>
                    <span>skills, knowledge and connections to start my own company.</span>
                </p>

                {/* Relevant Experience */}
                <h2>Experience</h2>
                
                <div className="company-name-and-date">
                    <h4>Rational Enterprise - Albany, NY</h4>
                    <span>May 2018 - Present</span>
                </div>
                <i>Software Developer</i>
                <ul>
                    <li>Developed monolithic single-page angularJS web application</li>
                    <li>Lead the redesign and rearchitecture of many key front-end components and pages of the application</li>
                    <li>Held responsibility of performing code reviews on all front-end code</li>
                    <li>Trained and onboarded new front-end developers to ensure they could begin contributing meaningful work as quickly as possible</li>
                    <li>Architected and wrote specifications for new front-end features to be built by other developers</li>
                    <li>Lead the research and development effort to tranistion our front-end framework from angularJS to Vue</li>
                </ul>

                <div className="company-name-and-date">
                    <h4>Ford Motor Company - Dearborn, MI</h4>
                    <span>May 2016 - August 2016</span>
                </div>
                <i>Software Development Intern</i>
                <ul>
                    <li>Developed Java EE (JSF/JPA) web application from the ground up</li>
                    <li>Practiced Agile development methodologies extensively with bi-weekly sprints</li>
                    <li>Cooperated with a team of 6 developers, frequently using paired programming when necessary</li>
                    <li>Refactored a large portion of Java and HTML code to be reusable</li>
                    <li>Demonstrated new features on a bi-weekly basis to stakeholders</li>
                </ul>

                <div className="company-name-and-date">
                    <h4>Gavant Software - Troy NY</h4>
                    <span>June 2015 - August 2015</span>
                </div>
                <i>Software Development Intern (Web/Mobile)</i>
                <ul>
                    <li>Developed a back end analytical data capturing service using C# (.NET)</li>
                    <li>Integrated the analytic service into the corresponding cross-platform mobile application</li>
                    <li>Redesigned an MVC web interface to reflect the analytic data captured by the service</li>
                    <li>Implemented data filtering and sorting functionality</li>
                    <li>Implemented an ajax typeahead for search queries with utilization of Bootstrap</li>
                    <li>Protected the search queries from the possibility of cross-site scripting</li>
                </ul>

                <div className="company-name-and-date">
                    <h4>Gavant Software - Troy NY</h4>
                    <span>Dec 2013 - April 2014</span>
                </div>
                <i>Software Development Intern</i>
                <ul>
                    <li>Assembled a dynamic JSP, Java, and SQL web application from the ground up</li>
                </ul>

                {/* Other employment */}
                <h2>Other Employment</h2>

                <div className="company-name-and-date">
                    <h4>Rensselaer Polytechnic Institute - Troy, NY</h4>
                    <span>September 2015 - May 2016</span>
                </div>
                <i>Technology Support Specialist</i>
            </div>
        </div>
    );
}