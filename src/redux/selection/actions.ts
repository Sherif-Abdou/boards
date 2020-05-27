import {SelectionAction, SET_SELECTED_BOARD} from "./types"

export function selectBoard(board_id: string): SelectionAction {
    return {
        type: SET_SELECTED_BOARD,
        board_id
    }
}