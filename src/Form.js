import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }

    handleDescChange(e) {
        this.props.onDescChange(e.target.value);
    }

    handleSubmit(e) {
        this.props.onSubmit();
        e.preventDefault();
    }

    render() {
        const name = this.props.name;
        const desc = this.props.desc;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={this.handleNameChange}/>
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" value={desc} onChange={this.handleDescChange}/>
                </div>

                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;
