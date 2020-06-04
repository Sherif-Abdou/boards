import React from "react";
import { connect } from "react-redux";
import { addBoard } from "../redux/boards/actions";
import { Board } from "../redux/types";

interface Props {
    addBoard: typeof addBoard;
}

interface State {
    title: string;
}

class AddBoard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: "",
        };

        this.newBoard = this.newBoard.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    componentDidMount() {
        this.setState((prev) => ({
            title: "",
        }));
    }

    newBoard(e: any) {
        let board = new Board(this.state.title);
        this.props.addBoard(board);
    }

    onTitleChange(e: any) {
        const value = e.target.value;
        this.setState((prev) => ({
            title: value,
        }));
    }

    render() {
        return (
            <React.Fragment>
                <button
                    className="list-group-item list-group-item-action list-group-item-primary"
                    data-toggle={"modal"}
                    data-target={"#addboard"}
                >
                    Add Board
                </button>
                <div
                    className="modal fade"
                    id={"addboard"}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby={"modal label"}
                    aria-hidden={"true"}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Board</h5>
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
                                        <label htmlFor={"addboard_title"}>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={"addboard_title"}
                                            value={this.state.title}
                                            onChange={this.onTitleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.newBoard}
                                    data-dismiss="modal"
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
}

const mapDispatchToProps = { addBoard };

export default connect(null, mapDispatchToProps)(AddBoard);
