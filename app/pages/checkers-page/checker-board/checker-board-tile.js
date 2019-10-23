import React, {Component} from 'react';

export default class CheckerBoardTile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            props
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, index) {
        this.state.props.handleClick(this.state.props.configuration.index);
    }

    render() {
        return (
            <div className={`tile ${this.state.props.configuration.even ? 'even' : 'odd'}`}>
                {this.state.props.configuration.hasPiece &&
                    <div onClick={(e) => this.handleClick(event, this.props.configuration.index)}
                        className={`checker fa fa-dot-circle ${this.state.props.configuration.good ? 'good' : 'bad'}`}>
                    </div>
                }
                {this.state.props.configuration.isValidMove && 
                    <span>valid move</span>
                }
            </div>
        )
    }
}