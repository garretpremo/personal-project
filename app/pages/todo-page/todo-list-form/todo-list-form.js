import React, {Component} from 'react';
import './todo-list-form.scss';

export default class TodoListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            error: false,
            submitted: false,
            submit: props.onSubmit
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    hasError() {
        return this.state.title === '' || this.state.description === '';
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (!this.hasError()) {
            // submit list item
            this.state.submit({
                title: this.state.title,
                description: this.state.description
            });

            // reset form
            this.setState({
                title: '',
                description: '',
                error: false,
                submitted: false
            });
        } else {
            this.setState({
                error: true,
                submitted: true
            });
        }
    }

    handleChangeTitle(event) {
        event.preventDefault();
        this.setState({
            title: event.target.value,
            error: this.hasError()
        });
    }
    
    handleChangeDescription(event) {
        event.preventDefault();
        this.setState({
            description: event.target.value,
            error: this.hasError()
        });
    }

    render() {
        let errorMessage;
        if (this.state.error && this.state.submitted) {
            if (this.state.title === '' && this.state.description === '') {
                errorMessage =
                    <div className="error-message">
                        Please fill out the form.
                    </div>;
            } else if (this.state.title === '') {
                errorMessage = 
                    <div className="error-message">
                        Please fill out the Title.
                    </div>;
            } else {
                errorMessage = 
                    <div className="error-message">
                        Please fill out the Description.
                    </div>;
            }
        } else {
            errorMessage = <div className="error-message hidden"></div>;
        }

        return (
            <form onSubmit={this.handleSubmit} className="todo-list-form">
                <header>
                    <h3>Create Todo Item</h3>
                    {errorMessage}
                </header>
                <div>
                    <label>Item Title</label>
                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.handleChangeTitle}/>
                    <label>Item Description</label>
                    <input type="text" value={this.state.description} placeholder="Description" onChange={this.handleChangeDescription}/>
                </div>
                <footer>
                    <button type="submit">Submit</button>
                </footer>
            </form>
        )
    }
}