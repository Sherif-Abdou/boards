export const SET_SELECTED_BOARD = "SET_SELECTED_BOARD";

interface SetSelectedBoardAction {
    type: typeof SET_SELECTED_BOARD;
    board_id: string;
}

export type SelectionAction = SetSelectedBoardAction;