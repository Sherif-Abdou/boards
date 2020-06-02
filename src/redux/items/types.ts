import { Board, Item } from "../types";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

interface AddItemAction {
    type: typeof ADD_ITEM;
    item: Item;
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    item_id: string;
}

interface EditItemAction {
    type: typeof EDIT_ITEM;
    item_id: string;
    item: Item;
}

export type ItemActionTypes = AddItemAction | EditItemAction | RemoveItemAction;
