import {
    BoardActionTypes,
    ADD_BOARD,
    LINK_COLUMN,
    REMOVE_BOARD,
} from "./types";
import { Board } from "../types";

export function addBoard(board: Board): BoardActionTypes {
    return {
        type: ADD_BOARD,
        board,
    };
}

export function removeBoard(board_id: string): BoardActionTypes {
    return {
        type: REMOVE_BOARD,
        board_id,
    };
}

export function linkBoard(
    board_id: string,
    column_id: string
): BoardActionTypes {
    return {
        type: LINK_COLUMN,
        board_id,
        column_id,
    };
}
