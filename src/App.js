import React, { Component } from "react";
import Section from "./Section";
import SectionEditor from "./SectionEditor";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

class App extends Component {
    constructor(props) {
        super(props);

        // Sample sections
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
        this.handleSectionAdd = this.handleSectionAdd.bind(this);
        this.handleSectionDelete = this.handleSectionDelete.bind(this);
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
        if (this.state.sections.has(newSection)) {
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

    handleSectionAdd(e) {
        const sections = new Map(this.state.sections);

        sections.set(this.state.nextId, {
            title: '',
            editing: true
        });

        this.setState({
            nextId: this.state.nextId + 1,
            sections: sections,
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

    handleSectionDelete(id) {
        const sections = new Map(this.state.sections);

        // Delete the section by ID.
        sections.delete(id);

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
        const sectionComponents = [];

        this.state.sections.forEach((section, id) => {
            if (section.editing) {
                sectionComponents.push((
                    <SectionEditor
                        onSectionEdit={this.handleSectionEdit}
                        onSectionTitleChange={this.handleSectionTitleChange}
                        title={section.title}
                        id={id}
                        key={id}
                    />
                ));
            } else {
                sectionComponents.push((
                    <Section
                        onAdd={this.handleAdd}
                        onMove={this.handleMove}
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}
                        onItemNameChange={this.handleItemNameChange}
                        onItemDescChange={this.handleItemDescChange}
                        onSectionEdit={this.handleSectionEdit}
                        onSectionDelete={this.handleSectionDelete}
                        title={section.title}
                        items={this.state.items}
                        id={id}
                        key={id}
                    />
                ));
            }
        });

        return (
            <div className="container">
                <h1>React Kanban Demo
                    <div className="button-group float-right">
                        <button className="btn btn-primary" onClick={this.handleSectionAdd}>Add Section</button>
                    </div>
                </h1>
                <hr/>
                <div className="row">
                    {sectionComponents}
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
