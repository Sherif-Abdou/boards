import {
    ADD_COLUMN,
    LINK_ITEM,
    REMOVE_COLUMN,
    ColumnActionTypes,
} from "./types";
import { Column } from "../types";

const initialState: Column[] = [];

export function columnReducer(
    state = initialState,
    action: ColumnActionTypes
): typeof initialState {
    switch (action.type) {
        case ADD_COLUMN:
            return [...state, action.column];
        case REMOVE_COLUMN:
            return state.filter((column) => column.id != action.column_id);
        case LINK_ITEM:
            return state.map((column) => {
                if (column.id == action.column_id) {
                    column.items.push(action.item_id);
                }
                return column;
            });
        default:
            return state;
    }
}
