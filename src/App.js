import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
    constructor(props) {
        super(props);

        // TEMP: Sample sections
        const sampleSections = new Map();
        sampleSections.set(0, {
            title: 'ToDo',
            editing: false,
        });
        sampleSections.set(1, {
            title: 'In Progress',
            editing: false,
        });
        sampleSections.set(2, {
            title: 'Done',
            editing: false,
        });

        // Items and sections are "resources" with unique IDs.
        this.state = {
            nextId: 3,
            items: new Map(),
            sections: sampleSections,
        };

        // Bind "this" to each handler function so "this" refers to the App instance.
        this.handleItemNameChange = this.handleItemNameChange.bind(this);
        this.handleItemDescChange = this.handleItemDescChange.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSectionEdit = this.handleSectionEdit.bind(this);
        this.handleSectionTitleChange = this.handleSectionTitleChange.bind(this);
    }

    handleItemNameChange(id, newName) {
        const items = new Map(this.state.items);

        // Change the item's name.
        items.get(id).name = newName;

        this.setState({
            items: items,
        });
    }

    handleItemDescChange(id, newDesc) {
        const items = new Map(this.state.items);

        // Change the item's description.
        items.get(id).desc = newDesc;

        this.setState({
            items: items,
        });
    }

    handleMove(id, newSection) {
        const items = new Map(this.state.items);

        // Ensure that the destination is allowed.
        if (newSection >= 0 && newSection <= 2) {
            items.get(id).section = newSection;
        }

        // Set the state to contain the newly updated list.
        this.setState({
            items: items,
        });
    }

    handleEdit(id, editing) {
        const items = new Map(this.state.items);

        // Switch the item to edit mode if editing is true.
        items.get(id).editing = editing;

        this.setState({
            items: items,
        });
    }

    handleDelete(id) {
        const items = new Map(this.state.items);

        // Remove the item from the map by ID.
        items.delete(id);

        this.setState({
            items: items,
        })
    }

    handleAdd(section) {
        // Create a copy of the items map.
        const items = new Map(this.state.items);

        // Add a new blank item to the map.
        items.set(this.state.nextId, {
           section: section,
           name: '',
           desc: '',
           editing: true,
        });

        // Set the state to the new map and increment the next ID.
        this.setState({
            nextId: this.state.nextId + 1,
            items: items,
        });
    }

    handleSectionEdit(id, editing) {
        const sections = new Map(this.state.sections);

        // Switch the section to edit mode if necessary.
        sections.get(id).editing = editing;

        this.setState({
            sections: sections,
        });

    }

    handleSectionTitleChange(id, newTitle) {
        const sections = new Map(this.state.sections);

        // Change the section's name.
        sections.get(id).title = newTitle;

        this.setState({
            sections: sections,
        });
    }

    render() {
        return (
            <div className="container">
                <h1>React Kanban Demo
                    <div className="button-group float-right">
                        <button className="btn btn-primary">Add Section</button>
                    </div>
                </h1>
                <hr/>
                <Board
                    onAdd={this.handleAdd}
                    onMove={this.handleMove}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    onItemNameChange={this.handleItemNameChange}
                    onItemDescChange={this.handleItemDescChange}
                    onSectionTitleChange={this.handleSectionTitleChange}
                    onSectionEdit={this.handleSectionEdit}
                    sections={this.state.sections}
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default App;
