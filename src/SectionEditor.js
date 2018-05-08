import React, { Component } from "react";

class SectionEditor extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSectionTitleChange = this.handleSectionTitleChange.bind(this);
    }

    handleSubmit(e) {
        this.props.onSectionEdit(this.props.id, false);
        
        e.preventDefault();
    }

    handleSectionTitleChange(e) {
        this.props.onSectionTitleChange(this.props.id, e.target.value);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="section border-primary rounded">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input className="form-control" type="text" value={this.props.title} onChange={this.handleSectionTitleChange}/>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Done"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default SectionEditor;
