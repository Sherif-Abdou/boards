import React from "react";
import BoardList from "./BoardList";
import BoardDetails from "./BoardDetails";
import {Board, Column, Item} from "../redux/types";
import store from "../redux";
import * as board_actions from "../redux/boards/actions";
import * as column_actions from "../redux/columns/actions";
import * as item_actions from "../redux/items/actions";


class App extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        // Initializes a test board with columns and items
        let board = new Board("Test Board");
        store.dispatch(board_actions.addBoard(board));
        ["Not Done", "In Progress", "Done"].forEach((value, i) => {
            let column = new Column(value);
            store.dispatch(column_actions.addColumn(column));
            store.dispatch(board_actions.linkBoard(store.getState().boards[0].id, store.getState().columns[i].id))
        });
        ["Finish this", "Make it look nice", "Other stuff", "fasdf", "asdf"].forEach((value, i) => {
            let item = new Item(value);
            store.dispatch(item_actions.addItem(item));
            store.dispatch(column_actions.linkItem(store.getState().items[i].id, store.getState().columns[0].id))
        });
    }
    render() {
        return (<div className="container-fluid">
            <div className="row">
                <BoardList />
                <BoardDetails />
            </div>
        </div>);
    }
}

export default App;
