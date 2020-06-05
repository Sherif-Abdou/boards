import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/items/actions";
import { linkItem } from "../redux/columns/actions";
import { Item } from "../redux/types";

interface Props {
    addItem: typeof addItem;
    linkItem: typeof linkItem;
    index: number;
    column_id: string;
}

interface State {
    title: string;
    body: string;
}

class AddItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState((prev) => ({
            title: "",
            body: "",
        }));
    }

    onTitleChange(e: any) {
        const value = e.target.value;

        this.setState((prev) => ({
            ...prev,
            title: value,
        }));
    }

    onContentChange(e: any) {
        const value = e.target.value;

        this.setState((prev) => ({
            ...prev,
            body: value,
        }));
    }

    onSubmit() {
        let item = new Item();
        item.title = this.state.title;
        item.content = this.state.body;

        this.props.addItem(item);
        this.props.linkItem(item.id, this.props.column_id);
    }

    render() {
        const baseId = `addItem${this.props.index}`;
        return (
            <React.Fragment>
                <button
                    type="button"
                    className={"btn"}
                    data-toggle={"modal"}
                    data-target={"#" + baseId + "_modal"}
                >
                    +
                </button>
                <div
                    className="modal fade"
                    id={baseId + "_modal"}
                    tabIndex={-1}
                    role={"dialog"}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Item</h5>
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
                                        <label htmlFor={baseId + "_title"}>
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={baseId + "_title"}
                                            value={this.state.title}
                                            onChange={this.onTitleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={baseId + "_content"}>
                                            Details
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id={baseId + "_content"}
                                            value={this.state.body}
                                            onChange={this.onContentChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={this.onSubmit}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = { addItem, linkItem };

export default connect(null, mapDispatchToProps)(AddItem);
