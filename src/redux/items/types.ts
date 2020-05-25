import { Board, Item } from "../types";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface AddItemAction {
    type: typeof ADD_ITEM;
    item: Item;
    board_id: string;
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    item_id: string;
}

export type ItemActionTypes = AddItemAction | RemoveItemAction;
