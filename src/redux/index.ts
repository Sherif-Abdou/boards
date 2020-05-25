import { createStore, combineReducers } from "redux";
import { boardReducer } from "./boards/reducer";
import { columnReducer } from "./columns/reducer";
import { itemReducer } from "./items/reducer";

const store = createStore(
    combineReducers({
        boards: boardReducer,
        columns: columnReducer,
        items: itemReducer,
    })
);
export default store;
