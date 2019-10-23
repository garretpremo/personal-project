import React, {Component} from 'react';
import './todo-list.scss';

function listItem(listElement, index) {
    return(
        <li key={index}>
            <div className="list-item-content">
                <header>{listElement.title}</header>
                <p>{listElement.description}</p>
            </div>
            <div className="list-item-actions">
                <button type="button" onClick={listElement.delete}>X</button>
            </div>
        </li>
    );
}

function listEmptyItem() {
    return (
        <li className="empty-list-item">
            <span>No todo items, please fill out the form</span>
        </li>
    );
}

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    render() {
        const elements = this.state.items;
        let items;

        if (elements.length !== 0) {
            items = elements.map(listItem);
        } else {
            items = listEmptyItem();
        }

        return (
            <ul className="todo-list">
                {items}
            </ul>
        )
    }
}