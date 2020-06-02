import {ADD_ITEM, EDIT_ITEM, ItemActionTypes, REMOVE_ITEM} from "./types";
import {Item} from "../types";

const ItemState: Item[] = [];

export function itemReducer(
    state = ItemState,
    action: ItemActionTypes
): typeof ItemState {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.item];
        case EDIT_ITEM:
            return state.map(item => {
                if (item.id === action.item_id) {
                    let clone = Object.assign({}, action.item);
                    Object.setPrototypeOf(clone, Item.prototype);
                    return clone
                }
                return item
            });
        case REMOVE_ITEM:
            return state.filter((item) => item.id !== action.item_id);
        default:
            return state;
    }
}
