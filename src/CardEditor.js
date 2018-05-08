import React, { Component } from "react";

class CardEditor extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    handleSubmit(e) {
        // Switch off editing mode for this card.
        this.props.onEdit(this.props.index, false);

        e.preventDefault();
    }

    handleNameChange(e) {
        this.props.onItemNameChange(this.props.index, e.target.value);
    }

    handleDescChange(e) {
        this.props.onItemDescChange(this.props.index, e.target.value);
    }

    render() {
        return (
            <li className="card editor">
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label><br/>
                    <input type="text" id="name" value={this.props.name} onChange={this.handleNameChange}/><br/>
                    <label>Description</label><br/>
                    <input type="text" id="desc" value={this.props.desc} onChange={this.handleDescChange}/>
                    <input type="submit" value="Done"/>
                </form>
            </li>
        );
    }
}

export default CardEditor;
