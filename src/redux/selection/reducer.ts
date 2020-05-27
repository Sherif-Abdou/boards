import {SelectionAction, SET_SELECTED_BOARD} from "./types"

const initialState = {
    selected_board: ""
};

export function selectionReducer(state=initialState, action: SelectionAction) {
    switch (action.type) {
        case SET_SELECTED_BOARD:
            return {
                ...state,
                selected_board: action.board_id
            };
        default:
            return state;
    }
}