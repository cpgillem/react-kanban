import React, { Component } from "react";
import Card from "./Card";
import CardEditor from "./CardEditor";
import { DropTarget } from "react-dnd";

class Section extends Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSectionEdit = this.handleSectionEdit.bind(this);
        this.handleSectionDelete = this.handleSectionDelete.bind(this);
    }

    handleAdd() {
        this.props.onAdd(this.props.id);
    }

    handleSectionEdit() {
        this.props.onSectionEdit(this.props.id, true);
    }

    handleSectionDelete() {
        this.props.onSectionDelete(this.props.id);
    }

    render() {
        const cards = [];
        const { connectDropTarget } = this.props;

        this.props.items.forEach((item, id) => {
            // Make sure the item belongs to this section.
            if (item.section === this.props.id) {
                // If the item is in edit mode, display a card editor.
                if (item.editing) {
                    cards.push((
                        <CardEditor
                            onEdit={this.props.onEdit}
                            onItemNameChange={this.props.onItemNameChange}
                            onItemDescChange={this.props.onItemDescChange}
                            name={item.name}
                            desc={item.desc}
                            id={id}
                            key={id}
                        />
                    ));
                } else {
                    cards.push((
                        <Card
                            onMove={this.props.onMove}
                            onEdit={this.props.onEdit}
                            onDelete={this.props.onDelete}
                            name={item.name}
                            desc={item.desc}
                            id={id}
                            key={id}
                        />
                    ));
                }
            }
        });

        return connectDropTarget((
            <div className="col-md">
                <div className="section border-light rounded">
                    <h3>{this.props.title}
                        <div className="btn-group float-right">
                            <button className="btn btn-primary" onClick={this.handleAdd}>+</button>
                            <button className="btn btn-primary" onClick={this.handleSectionEdit}>&#9998;</button>
                            <button className="btn btn-danger" onClick={this.handleSectionDelete}>&#10007;</button>
                        </div>
                    </h3>
                    <hr/>
                    <ul>
                        {cards}
                    </ul>
                </div>
            </div>
        ));
    }
}

const sectionTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        item.onMove(item.id, props.id);
    },
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}

export default DropTarget("item", sectionTarget, collect)(Section);
