import React from "react";
import BoardList from "./BoardList";
import BoardDetails from "./BoardDetails";
import {Board, Column} from "../redux/types";
import store from "../redux";
import * as board_actions from "../redux/boards/actions";
import * as column_actions from "../redux/columns/actions";


class App extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        let board = new Board("Test Board");
        store.dispatch(board_actions.addBoard(board));
        ["Not Done", "In Progress", "Done"].forEach((value, i) => {
            let column = new Column(value);
            store.dispatch(column_actions.addColumn(column));
            store.dispatch(board_actions.linkBoard(store.getState().boards[0].id, store.getState().columns[i].id))
        });
    }
    render() {
        return (<div className="container">
            <div className="row">
                <BoardList />
                <BoardDetails />
            </div>
        </div>)
    }
}

export default App;
