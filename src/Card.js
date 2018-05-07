import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        this.handleMoveLeft = this.handleMoveLeft.bind(this);
        this.handleMoveRight = this.handleMoveRight.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleMoveLeft(e) {
        this.props.onMoveLeft(this.props.index);
    }

    handleMoveRight(e) {
        this.props.onMoveRight(this.props.index);
    }

    handleDelete(e) {
        this.props.onDelete(this.props.index);
    }

    render() {
        return (
            <li>
                <strong>{this.props.name}</strong>
                <p>{this.props.desc}</p>
                <a href="#" onClick={this.handleMoveLeft}>Left</a>{" "}
                <a href="#" onClick={this.handleMoveRight}>Right</a>{" "}
                <a href="#" onClick={this.handleDelete}>Delete</a>{" "}
            </li>
        );
    }
}

export default Card;
