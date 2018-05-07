import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        this.handleMoveToDo = this.handleMoveToDo.bind(this);
        this.handleMoveInProgress = this.handleMoveInProgress.bind(this);
        this.handleMoveDone = this.handleMoveDone.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleMoveToDo(e) {
        this.props.onMove(this.props.index, 0);
    }

    handleMoveInProgress(e) {
        this.props.onMove(this.props.index, 1);
    }

    handleMoveDone(e) {
        this.props.onMove(this.props.index, 2);
    }

    handleDelete(e) {
        this.props.onDelete(this.props.index);
    }

    render() {
        return (
            <li>
                <strong>{this.props.name}</strong>
                <p>{this.props.desc}</p>
                <a href="#" onClick={this.handleMoveToDo}>Move to ToDo</a><br/>
                <a href="#" onClick={this.handleMoveInProgress}>Move to In Progress</a><br/>
                <a href="#" onClick={this.handleMoveDone}>Move to Done</a><br/>
                <a href="#" onClick={this.handleDelete}>Delete</a>
            </li>
        );
    }
}

export default Card;
