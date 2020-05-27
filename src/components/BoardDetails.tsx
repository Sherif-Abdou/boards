import React from "react";
import {connect} from "react-redux";
import {Board} from "../redux/types";

interface Props {
    board: Board | null
}

class BoardDetails extends React.Component<Props, {}> {
    render() {
        const {board} = this.props;
        return (
            <div className="col-8">
                <div className="row justify-content-center">
                    {board !== null &&
                        <h1>{board.name}</h1>
                    }
                </div>
                <div>

                </div>
            </div>
        )
    }

    static defaultProps = {
        board: null
    };
}

const mapStateToProps = (state: any) => {
    console.log("ID to look for: " + state.selection.selected_board);
    const search = state.boards.filter((board: Board) => board.id === state.selection.selected_board);
    console.log("Search: "+search);
    return {
        board: search.length > 0 ? search[0] : null
    };
};

export default connect(mapStateToProps, null)(BoardDetails);
