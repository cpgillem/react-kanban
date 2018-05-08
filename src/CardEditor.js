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
            <li className="card editor shadow border border-primary">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" value={this.props.name} onChange={this.handleNameChange}/>
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" value={this.props.desc} onChange={this.handleDescChange}></textarea>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Done"/>
                    </form>
                </div>
            </li>
        );
    }
}

export default CardEditor;
