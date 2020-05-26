import {
    BoardActionTypes,
    ADD_BOARD,
    LINK_COLUMN,
    REMOVE_BOARD,
} from "./types";
import {Board} from "../types";

const initialState: Board[] = [];

export function boardReducer(
    state = initialState,
    action: BoardActionTypes
): typeof initialState {
    switch (action.type) {
        case ADD_BOARD:
            return [...state, action.board];
        case REMOVE_BOARD:
            return state.filter((board) => board.id !== action.board_id);
        case LINK_COLUMN:
            return state.map((board) => {
                let clone = Object.assign({}, board);
                Object.setPrototypeOf(clone, Board.prototype);
                if (clone.id === action.board_id) {
                    clone.columns = [...clone.columns, action.column_id]
                }
                return clone;
            });
        default:
            return state;
    }
}
