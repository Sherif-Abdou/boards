import { ADD_ITEM, REMOVE_ITEM, ItemActionTypes } from "./types";
import { Item } from "../types";

export function addItem(item: Item): ItemActionTypes {
    return {
        type: ADD_ITEM,
        item,
    };
}

export function removeItem(item_id: string): ItemActionTypes {
    return {
        type: REMOVE_ITEM,
        item_id,
    };
}
