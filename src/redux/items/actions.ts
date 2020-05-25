import { ADD_ITEM, REMOVE_ITEM, ItemActionTypes } from "./types";
import { Item } from "../types";

function addItem(item: Item, board_id: string): ItemActionTypes {
    return {
        type: ADD_ITEM,
        item,
        board_id,
    };
}

function removeItem(item_id: string): ItemActionTypes {
    return {
        type: REMOVE_ITEM,
        item_id,
    };
}
