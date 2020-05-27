import React from "react";
import { connect } from "react-redux";
import { Board } from "../redux/types";
import store from "../redux";
import * as board_actions from "../redux/boards/actions";
import BoardListItem from "./BoardListItem";

interface Props {
    boards: Board[];
}

class BoardList extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        let board = new Board("Test Board");
        store.dispatch(board_actions.addBoard(board));
    }

    static defaultProps = {
        boards: [],
    };

    render() {
        const board_list = this.props.boards.map((board) => (
            <BoardListItem board={board} key={board.id} />
        ));
        return (
            <div className="col-4">
                <ul className="list-group">{board_list}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        boards: state.boards,
    };
};

export default connect(mapStateToProps, null)(BoardList);
