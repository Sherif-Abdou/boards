import { Board } from "../types";

export const ADD_BOARD = "ADD_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const LINK_COLUMN = "LINK_ITEM";

interface AddBoardAction {
    type: typeof ADD_BOARD;
    board: Board;
}

interface RemoveBoardAction {
    type: typeof REMOVE_BOARD;
    board_id: string;
}

interface LinkColumnAction {
    type: typeof LINK_COLUMN;
    board_id: string;
    column_id: string;
}

export type BoardActionTypes =
    | AddBoardAction
    | RemoveBoardAction
    | LinkColumnAction;
