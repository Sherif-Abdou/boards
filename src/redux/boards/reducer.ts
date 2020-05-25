import { BoardActionTypes, ADD_BOARD, LINK_ITEM, REMOVE_BOARD } from "./types";
import { Board } from "../types";

const initialState: Board[] = [];

export function boardReducer(
    state = initialState,
    action: BoardActionTypes
): typeof initialState {
    switch (action.type) {
        case "ADD_BOARD":
            return [...state, action.board];
        case "REMOVE_BOARD":
            return state.filter((board) => board.id != action.board_id);
        default:
            return state;
    }
}
