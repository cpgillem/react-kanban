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
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" value={name} onChange={this.handleNameChange}/>
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" value={desc} onChange={this.handleDescChange}></textarea>
                        </div>

                        <input className="btn btn-primary" type="submit" value="Submit"/>
                    </form>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Form;
