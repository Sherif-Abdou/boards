import { Column } from "../types";

export const ADD_COLUMN = "ADD_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";
export const LINK_ITEM = "LINK_ITEM";
export const UNLINK_ITEM = "UNLINK_ITEM";

interface AddColumnAction {
    type: typeof ADD_COLUMN;
    column: Column;
}

interface RemoveColumnAction {
    type: typeof REMOVE_COLUMN;
    column_id: string;
}

interface LinkItemAction {
    type: typeof LINK_ITEM;
    item_id: string;
    column_id: string;
}

interface UnlinkItemAction {
    type: typeof UNLINK_ITEM,
    item_id: string;
    column_id: string;
}

export type ColumnActionTypes =
    | AddColumnAction
    | RemoveColumnAction
    | LinkItemAction
    | UnlinkItemAction;
