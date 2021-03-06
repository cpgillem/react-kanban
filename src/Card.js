import React, { Component } from "react";
import { DragSource } from "react-dnd";

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
        this.props.onMove(this.props.id, 0);
    }

    // Called when the user clicks on "Move to In Progress."
    handleMoveInProgress(e) {
        this.props.onMove(this.props.id, 1);
    }

    // Called when the user clicks on "Move to Done."
    handleMoveDone(e) {
        this.props.onMove(this.props.id, 2);
    }

    // Called when the user clicks on "Edit."
    handleEdit(e) {
        this.props.onEdit(this.props.id, true);
    }

    // Called when the user clicks "Delete."
    handleDelete(e) {
        this.props.onDelete(this.props.id);
    }

    render() {
        const { connectDragSource } = this.props;

        return connectDragSource((
            <li className="card shadow">
                <div className="card-header">
                    {this.props.name}
                    <div className="btn-group float-right">
                        <button className="btn btn-secondary btn-sm" onClick={this.handleEdit}>&#9998;</button>
                        <button className="btn btn-danger btn-sm" onClick={this.handleDelete}>&#10007;</button>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.desc}</p>
                </div>
            </li>
        ));
    }
}

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            name: props.name,
            desc: props.desc,
            onMove: props.onMove,
        };
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
}

export default DragSource("item", cardSource, collect)(Card);
