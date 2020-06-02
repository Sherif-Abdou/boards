import React from "react";
import { connect } from "react-redux";
import { Board } from "../redux/types";
import ColumnGroup from "./ColumnGroup";

interface Props {
    board: Board | null;
}

// The master component for the details of a board, like columns and items
class BoardDetails extends React.Component<Props, {}> {
    render() {
        const { board } = this.props;
        return (
            <div className="col-8">
                <div>
                    {board !== null && ( // Only renders details if a board is selected
                        <div>
                            <div className="row justify-content-center">
                                <h1>{board.name}</h1>
                            </div>
                            <br />
                            <div className="row">
                                <ColumnGroup />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    static defaultProps = {
        board: null,
    };
}

const mapStateToProps = (state: any) => {
    // Maps the selected board to a board property
    console.log("ID to look for: " + state.selection.selected_board);
    const search = state.boards.filter(
        (board: Board) => board.id === state.selection.selected_board
    );
    console.log("Search: " + search);
    return {
        board: search.length > 0 ? search[0] : null,
    };
};

export default connect(
    mapStateToProps,

    null
)(BoardDetails);
