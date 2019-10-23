import React from "react";
import './resume-skill.scss';

const StarType = {
    FULL: 'FULL',
    HALF: 'HALF',
    EMPTY: 'EMPTY'
}

export default function ResumeSkill(props) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (props.stars > i && props.stars < i + 1) {
            stars.push(<i key={`${props.skillName}-${i}`} className={`half-star fa fa-star-half-alt delay-${i}`}></i>);
        } else if (i < props.stars) {
            stars.push(<i key={`${props.skillName}-${i}`} className={`full-star fas fa-star delay-${i}`}></i>);
        } else {
            stars.push(<i key={`${props.skillName}-${i}`} className={`empty-star far fa-star delay-${i}`}></i>)
        }
    }

    return (
        <div className="skill">
            <span>{props.skillName}</span>
            <div className="stars">
                {stars}
            </div>
        </div>
    );
}