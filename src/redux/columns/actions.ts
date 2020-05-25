import {
    ADD_COLUMN,
    LINK_ITEM,
    REMOVE_COLUMN,
    ColumnActionTypes,
} from "./types";
import { Column } from "../types";

export function addColumn(column: Column): ColumnActionTypes {
    return {
        type: ADD_COLUMN,
        column,
    };
}

export function linkItem(
    item_id: string,
    column_id: string
): ColumnActionTypes {
    return {
        type: LINK_ITEM,
        item_id,
        column_id,
    };
}

export function removeColumn(column_id: string): ColumnActionTypes {
    return {
        type: REMOVE_COLUMN,
        column_id,
    };
}
