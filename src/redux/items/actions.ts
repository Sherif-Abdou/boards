import {ADD_ITEM, EDIT_ITEM, ItemActionTypes, REMOVE_ITEM} from "./types";
import {Item} from "../types";

export function addItem(item: Item): ItemActionTypes {
    return {
        type: ADD_ITEM,
        item,
    };
}

export function editItem(item_id: string, item: Item): ItemActionTypes {
    return {
        type: EDIT_ITEM,
        item_id,
        item
    }
}

export function removeItem(item_id: string): ItemActionTypes {
    return {
        type: REMOVE_ITEM,
        item_id,
    };
}
