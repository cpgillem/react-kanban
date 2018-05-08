import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };

        // Bind "this" to each handler function so "this" refers to the App instance.
        this.handleItemNameChange = this.handleItemNameChange.bind(this);
        this.handleItemDescChange = this.handleItemDescChange.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleItemNameChange(i, newName) {
        const items = this.state.items.slice();

        // Change the item's name.
        items[i].name = newName;

        this.setState({
            items: items,
        });
    }

    handleItemDescChange(i, newDesc) {
        const items = this.state.items.slice();

        // Change the item's description.
        items[i].desc = newDesc;

        this.setState({
            items: items,
        });
    }

    handleMove(i, dest) {
        const items = this.state.items.slice();

        // Ensure that the destination is allowed.
        if (dest >= 0 && dest <= 2) {
            items[i].section = dest;
        }

        // Set the state to contain the newly updated list.
        this.setState({
            items: items,
        });
    }

    handleEdit(i, editing) {
        const items = this.state.items.slice();

        // Switch the item to edit mode if editing is true.
        items[i].editing = editing;

        this.setState({
            items: items,
        });
    }

    handleDelete(i) {
        const items = this.state.items.slice();

        // Remove the item from the list.
        items.splice(i, 1);

        this.setState({
            items: items,
        })
    }

    handleAdd() {
        this.setState({
            items: this.state.items.concat([{
                section: 0,
                name: '',
                desc: '',
                editing: true,
            }]),
        });
    }

    render() {
        return (
            <div className="container">
                <h1>React Kanban Demo</h1>
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                    </div>
                </div>
                <Board
                    onMove={this.handleMove}
                    onEdit={this.handleEdit}
                    onItemNameChange={this.handleItemNameChange}
                    onItemDescChange={this.handleItemDescChange}
                    onDelete={this.handleDelete}
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default App;
