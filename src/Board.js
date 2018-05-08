import React, { Component } from "react";
import Section from "./Section";
import SectionEditor from "./SectionEditor";

class Board extends Component {
    render() {
        const sections = [];

        this.props.sections.forEach((section, id) => {
            if (section.editing) {
                sections.push((
                    <SectionEditor
                        onSectionEdit={this.props.onSectionEdit}
                        onSectionTitleChange={this.props.onSectionTitleChange}
                        title={section.title}
                        id={id}
                        key={id}
                    />
                ));
            } else {
                sections.push((
                    <Section
                        onAdd={this.props.onAdd}
                        onMove={this.props.onMove}
                        onEdit={this.props.onEdit}
                        onDelete={this.props.onDelete}
                        onItemNameChange={this.props.onItemNameChange}
                        onItemDescChange={this.props.onItemDescChange}
                        onSectionEdit={this.props.onSectionEdit}
                        title={section.title}
                        items={this.props.items}
                        id={id}
                        key={id}
                    />
                ));
            }
        });

        return (
            <div className="row">
                {sections}
            </div>
        );
    }
}

export default Board;
