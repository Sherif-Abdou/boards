import {ADD_COLUMN, ColumnActionTypes, LINK_ITEM, REMOVE_COLUMN, UNLINK_ITEM,} from "./types";
import {Column} from "../types";

const initialState: Column[] = [];

export function columnReducer(
    state = initialState,
    action: ColumnActionTypes
): typeof initialState {
    switch (action.type) {
        case ADD_COLUMN:
            return [...state, action.column];
        case REMOVE_COLUMN:
            return state.filter((column) => column.id !== action.column_id);
        case LINK_ITEM:
            return state.map((column) => {
                let clone = Object.assign({}, column);
                Object.setPrototypeOf(clone, Column.prototype);
                if (clone.id === action.column_id) {
                    clone.items.push(action.item_id);
                }
                return clone;
            });
        case UNLINK_ITEM:
            return state.map(column => {
                let clone = Object.assign({}, column);
                Object.setPrototypeOf(clone, Column.prototype);
                if (clone.id === action.column_id) {
                    clone.items = clone.items.filter(item => item !== action.item_id);
                }
                return clone;
            });
        default:
            return state;
    }
}
