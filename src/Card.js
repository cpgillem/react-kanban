import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        // Bind "this" to each handler function.
        this.handleMoveToDo = this.handleMoveToDo.bind(this);
        this.handleMoveInProgress = this.handleMoveInProgress.bind(this);
        this.handleMoveDone = this.handleMoveDone.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // Called when the user clicks on "Move to ToDo."
    handleMoveToDo(e) {
        this.props.onMove(this.props.index, 0);
    }

    // Called when the user clicks on "Move to In Progress."
    handleMoveInProgress(e) {
        this.props.onMove(this.props.index, 1);
    }

    // Called when the user clicks on "Move to Done."
    handleMoveDone(e) {
        this.props.onMove(this.props.index, 2);
    }

    // Called when the user clicks on "Edit."
    handleEdit(e) {
        this.props.onEdit(this.props.index, true);
    }

    // Called when the user clicks "Delete."
    handleDelete(e) {
        this.props.onDelete(this.props.index);
    }

    render() {
        return (
            <li className="card">
                <div className="card-header">
                    {this.props.name}
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.desc}</p>
                    <div className="btn-group-vertical">
                        <button className="btn btn-secondary" onClick={this.handleMoveToDo}>Move to ToDo</button>
                        <button className="btn btn-secondary" onClick={this.handleMoveInProgress}>Move to In Progress</button>
                        <button className="btn btn-secondary" onClick={this.handleMoveDone}>Move to Done</button>
                        <button className="btn btn-secondary" onClick={this.handleEdit}>Edit</button>
                        <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Card;
