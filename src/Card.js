import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <li>
                <strong>{this.props.name}</strong>
                <p>{this.props.desc}</p>
                <a href="#">Left</a>{" "}
                <a href="#">Right</a>{" "}
                <a href="#">Delete</a>{" "}
            </li>
        );
    }
}

export default Card;
