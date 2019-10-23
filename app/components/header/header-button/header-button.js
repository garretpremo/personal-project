import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './header-button.scss';

export default class HeaderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: props.text,
            active: props.active,
            onClick: props.action,
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.state.onClick();
    }

    render() {
        const buttonClassNames = `header-button${this.props.active ? ' active': ''}`;

        return (
            <Link to={this.props.route} className={buttonClassNames} onClick={this.handleClick}>
                <span>{this.state.buttonText}</span>
            </Link>
        )
    }
}