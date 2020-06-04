import React from "react";
import { connect } from "react-redux";
import { addColumn } from "../redux/columns/actions";
import { linkBoard } from "../redux/boards/actions";
import { Board, Column } from "../redux/types";

interface Props {
    addColumn: typeof addColumn;
    linkBoard: typeof linkBoard;
    board_id: string;
}

interface State {
    title: string;
}

class AddColumn extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: "",
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onTitleChange(e: any) {
        const value = e.target.value;
        this.setState((prev) => ({
            title: value,
        }));
    }

    submit(e: any) {
        let column = new Column(this.state.title);
        this.props.addColumn(column);
        this.props.linkBoard(this.props.board_id, column.id);
    }

    render() {
        return (
            <React.Fragment>
                <button
                    className="btn btn-info"
                    data-toggle={"modal"}
                    data-target={"#addcolumn"}
                >
                    Add Column
                </button>
                <div
                    className="modal fade"
                    id={"addcolumn"}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby={"modal label"}
                    aria-hidden={"true"}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Column</h5>
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
                                        <label htmlFor={"addcolumn_title"}>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={"addcolumn_title"}
                                            value={this.state.title}
                                            onChange={this.onTitleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={this.submit}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    static defaultProps = {
        addColumn: undefined,
        linkBoard: undefined,
        board_id: "",
    };
}
const mapStateToProps = (state: any, ownProps: Props) => {
    return {
        board_id: state.selection.selected_board,
    };
};

const mapDispatchToProps = { addColumn, linkBoard };

export default connect(mapStateToProps, mapDispatchToProps)(AddColumn);
