import { BoardActionTypes, ADD_BOARD, LINK_ITEM, REMOVE_BOARD } from "./types";
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

export function linkBoard(board_id: string, item_id: string) {
    return {
        type: LINK_ITEM,
        item_id,
        board_id,
    };
}
