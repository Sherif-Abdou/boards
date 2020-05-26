import { ADD_ITEM, REMOVE_ITEM, ItemActionTypes } from "./types";
import { Item } from "../types";

const ItemState: Item[] = [];

export function itemReducer(
    state = ItemState,
    action: ItemActionTypes
): typeof ItemState {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];
        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.item_id);
        default:
            return state;
    }
}
