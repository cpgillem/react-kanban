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
        this.handleMove = this.handleMove.bind(this);
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
            ]),
            nameInput: '',
            descInput: '',
        });
    }

    handleMove(i, dest) {
        const items = this.state.items.slice();

        // Ensure that the destination is allowed.
        if (dest >= 0 && dest <= 2) {
            items[i].section = dest;
        }

        this.setState({
            items: items,
        });
    }

    handleDelete(i) {
        const items = this.state.items.slice();
        items.splice(i, 1);

        this.setState({
            items: items,
        })
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
                    onMove={this.handleMove}
                    onDelete={this.handleDelete}
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default App;
