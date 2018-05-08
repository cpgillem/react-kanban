import React, { Component } from "react";

class Section extends Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.onAdd(this.props.id);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title} <button className="btn btn-primary float-right" onClick={this.handleAdd}>+</button></h3>
                <hr/>
                <ul>
                    {this.props.items}
                </ul>
            </div>
        );
    }
}

export default Section;
