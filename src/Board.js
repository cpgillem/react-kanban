import React, { Component } from "react";
import Card from "./Card";
import CardEditor from "./CardEditor";

class Board extends Component {
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
            if (item.section == 0) { // To Do
                todo.push(card);
            } else if (item.section == 1) { // In Progress
                inProgress.push(card);
            } else { // Done
                done.push(card);
            }
        });

        return (
            <div>
                <div className="section">
                    <h3>To Do</h3>
                    <ul id="todo">
                        {todo}
                    </ul>
                </div>
                <div className="section">
                    <h3>In Progress</h3>
                    <ul id="inProgress">
                        {inProgress}
                    </ul>
                </div>
                <div className="section">
                    <h3>Done</h3>
                    <ul id="done">
                        {done}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Board;
