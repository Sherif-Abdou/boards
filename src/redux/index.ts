import { createStore, combineReducers } from "redux";
import { boardReducer } from "./boards/reducer";
import { columnReducer } from "./columns/reducer";
import { itemReducer } from "./items/reducer";
import { selectionReducer } from "./selection/reducer";
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(
    combineReducers({
        boards: boardReducer,
        columns: columnReducer,
        items: itemReducer,
        selection: selectionReducer
    }),
    composeWithDevTools()
);

export default store;
