import React, { Component } from "react";
import Card from "./Card";
import CardEditor from "./CardEditor";

class Board extends Component {
    constructor(props) {
        super(props);

        this.handleAddToDo = this.handleAddToDo.bind(this);
        this.handleAddInProgress = this.handleAddInProgress.bind(this);
        this.handleAddDone = this.handleAddDone.bind(this);
    }

    handleAddToDo() {
        // Add a blank card to the todo section.
        this.props.onAdd(0);
    }

    handleAddInProgress() {
        // Add a blank card to the in progress section.
        this.props.onAdd(1);
    }

    handleAddDone() {
        // Add a blank card to the done section.
        this.props.onAdd(2);
    }

    render() {
        const todo = [];
        const inProgress = [];
        const done = [];

        // Add a card to the proper section for each item.
        this.props.items.forEach((item, index) => {
            let card = (
                <Card
                    onMove={this.props.onMove}
                    onEdit={this.props.onEdit}
                    onDelete={this.props.onDelete}
                    index={index}
                    name={item.name}
                    desc={item.desc}
                    key={index}
                />
            );

            // If the card is in edit mode, switch to a card editor.
            if (item.editing) {
                card = (
                    <CardEditor
                        onEdit={this.props.onEdit}
                        onItemNameChange={this.props.onItemNameChange}
                        onItemDescChange={this.props.onItemDescChange}
                        index={index}
                        name={item.name}
                        desc={item.desc}
                        key={index}
                    />
                );
            }

            // Decide where to render the card.
            if (item.section === 0) { // To Do
                todo.push(card);
            } else if (item.section === 1) { // In Progress
                inProgress.push(card);
            } else { // Done
                done.push(card);
            }
        });

        return (
            <div className="row">
                <div className="col-md-4">
                    <h3>To Do <button className="btn btn-primary float-right" onClick={this.handleAddToDo}>+</button></h3>
                    <hr/>
                    <ul id="todo">
                        {todo}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>In Progress <button className="btn btn-primary float-right" onClick={this.handleAddInProgress}>+</button></h3>
                    <hr/>
                    <ul id="inProgress">
                        {inProgress}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Done <button className="btn btn-primary float-right" onClick={this.handleAddDone}>+</button></h3>
                    <hr/>
                    <ul id="done">
                        {done}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Board;
