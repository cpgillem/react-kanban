import React, { Component } from "react";
import Form from "./Form";
import Board from "./Board";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            descInput: '',
            items: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleMoveLeft = this.handleMoveLeft.bind(this);
        this.handleMoveRight = this.handleMoveRight.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleNameChange(newName) {
        this.setState({
            nameInput: newName,
        });
    }

    handleDescChange(newDesc) {
        this.setState({
            descInput: newDesc,
        });
    }

    handleSubmit() {
        // Get a copy of the items list.
        const items = this.state.items.slice();

        // Add the new item.
        this.setState({
            items: items.concat([
                {
                    section: 0,
                    name: this.state.nameInput,
                    desc: this.state.descInput,
                }
            ])
        });
    }

    handleMoveLeft(i) {
        const items = this.state.items.slice();
        if (items[i].section > 0) {
            items[i].section -= 1;
        }

        this.setState({
            items: items,
        });
    }

    handleMoveRight(i) {
        const items = this.state.items.slice();
        if (items[i].section < 2) {
            items[i].section += 1;
        }

        this.setState({
            items: items,
        });
    }

    handleDelete(i) {
        
    }

    render() {
        return (
            <div>
                <h1>React Kanban Demo</h1>
                <Form
                    name={this.state.nameInput}
                    desc={this.state.descInput}
                    onNameChange={this.handleNameChange}
                    onDescChange={this.handleDescChange}
                    onSubmit={this.handleSubmit}
                />
                <Board
                    onMoveLeft={this.handleMoveLeft}
                    onMoveRight={this.handleMoveRight}
                    onDelete={this.handleDelete}
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default App;
