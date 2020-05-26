import store from "./index";
import * as board_actions from "./boards/actions";
import * as column_actions from "./columns/actions";
import * as item_actions from "./items/actions";
import {Board, Column, Item} from "./types";

test("store actually runs test", () => {
    console.log(store.getState());
});

test("Add board test", () => {
    let board = new Board("Test Board");
    store.dispatch(board_actions.addBoard(board));
    console.log(store.getState());
});

test("Add column test", () => {
    let column = new Column();
    store.dispatch(column_actions.addColumn(column));
    let midState = store.getState();
    store.dispatch(board_actions.linkBoard(store.getState().boards[0].id, store.getState().boards[0].id));
    let postState = store.getState();
    console.log(postState);
});

test("Add item test", () => {
    let item = new Item("Get this done");
    store.dispatch(item_actions.addItem(item));
    store.dispatch(
        column_actions.linkItem(store.getState().items[0].id, store.getState().columns[0].id)
    );
    console.log(store.getState());
    console.log("Column Items: " + store.getState().columns[0].items);
});
