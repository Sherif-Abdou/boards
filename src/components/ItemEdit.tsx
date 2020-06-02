import React from "react";
import { connect } from "react-redux";
import { Item } from "../redux/types";
import { editItem } from "../redux/items/actions";

interface Props {
    item: Item;
    editItem: typeof editItem;
}

interface State {
    title: string;
    content: string;
}

class ItemEdit extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.item.title,
            content: props.item.content,
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    onTitleChange(e: any) {
        const value = e.target.value;
        this.setState((prevState) => ({
            title: value,
        }));
        this.updateItem();
    }

    onContentChange(e: any) {
        const value = e.target.value;
        this.setState((prevState) => ({
            content: value,
        }));
        this.updateItem();
    }

    updateItem() {
        let item = new Item();
        item.title = this.state.title;
        item.content = this.state.content;
        item.id = this.props.item.id;
        this.props.editItem(item.id, item);
    }

    render() {
        const modalId = "modal_" + this.props.item.id;
        return (
            <div>
                <button
                    className="btn btn-secondary"
                    data-toggle="modal"
                    data-target={"#" + modalId}
                >
                    Edit
                </button>

                <div
                    className="modal fade"
                    id={modalId}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby={"modal label"}
                    aria-hidden={"true"}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Item</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor={modalId + "_title"}>
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={modalId + "_title"}
                                            value={this.state.title}
                                            onChange={this.onTitleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={modalId + "_content"}>
                                            Content
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id={modalId + "_content"}
                                            value={this.state.content}
                                            onChange={this.onContentChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.updateItem}
                                    data-dismiss="modal"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = { editItem };

export default connect(null, mapDispatchToProps)(ItemEdit);
