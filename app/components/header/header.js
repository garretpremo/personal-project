import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import HeaderButton from './header-button/header-button';

// scss
import './header.scss';

const ButtonType = {
    HOME: {
        value: "HOME",
        displayName: "Home",
        route: '/'
    },
    RESUME: {
        value: "RESUME",
        displayName: "Resume",
        route: '/resume'
    },
    TODO: {
        value: "TODO",
        displayName: "Todo List",
        route: '/todo'
    },
    CHECKERS: {
        value: "CHECKERS",
        displayName: "Checkers",
        route: '/checkers'
    }
};

function getSelectedButtonByRoute(route) {
    let buttonTypes = Object.keys(ButtonType);
    let selectedButtonType = ButtonType.HOME.value;

    buttonTypes.forEach(buttonType => {
        if (ButtonType[buttonType].route === route) {
            selectedButtonType = ButtonType[buttonType].value;
        }
    });

    return selectedButtonType;
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHeaderButton: getSelectedButtonByRoute(props.location.pathname)
        };
    }

    buttonAction(buttonType) {
        this.setState({
            selectedHeaderButton: buttonType.value
        });
    }

    buttonFrom(buttonType) {
        const {displayName, value, route} = buttonType
        return {
            text: displayName,
            type: value,
            route: route,
            action: () => { this.buttonAction(buttonType) }
        };
    }

    render() {
        const buttons = Object.keys(ButtonType).map(buttonType => this.buttonFrom(ButtonType[buttonType]));
        
        let selectedHeaderButton = this.state.selectedHeaderButton;

        if (ButtonType[this.state.selectedHeaderButton].route !== this.props.location.pathname) {
            selectedHeaderButton = getSelectedButtonByRoute(this.props.location.pathname)
        }

        const buttonElements = buttons.map((button, index) => {
            return <HeaderButton 
                        key={index} 
                        text={button.text} 
                        action={button.action}
                        route={button.route}
                        active={button.type === selectedHeaderButton}>
                    </HeaderButton>;
        });

        return (
            <header className="app-header">
                <img src="https://via.placeholder.com/150x42"/>
                <span>The App Header</span>
                <div className="app-header-buttons">
                    {buttonElements}
                </div>
            </header>
        );
    }
}

export default withRouter(Header);