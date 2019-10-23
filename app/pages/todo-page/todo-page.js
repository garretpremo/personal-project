import React, {Component} from 'react';

import TodoList from './todo-list/todo-list';
import TodoListForm from './todo-list-form/todo-list-form';

import "./todo-page.scss";

export default class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [ this.listItemFrom('title', 'description', 0) ]
        }
        this.onSubmitListItem = this.onSubmitListItem.bind(this);
    }

    listItemFrom(title, description, index) {
        return {
            title: title,
            description: description,
            delete: () => { this.onDeleteListItem(index); }
        }
    }

    onSubmitListItem(listItem) {
        this.setState((state) => {
            let listItems = state.listItems;
            listItems.push(this.listItemFrom(listItem.title, listItem.description, listItems.length));
            return {
                listItems: listItems
            }
        })
    }

    onDeleteListItem(listItemIndex) {
        this.setState((state) => {
            let listItems = state.listItems;
            listItems.splice(listItemIndex, 1);
            return {
                listItems: listItems
            }
        });
    }

    render() {
        return(
            <div className="todo-page">
                <TodoListForm onSubmit={this.onSubmitListItem}></TodoListForm>
                <TodoList items={this.state.listItems}></TodoList>
            </div>
        );
    }
}