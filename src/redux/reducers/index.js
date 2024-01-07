import { combineReducers } from "redux";
import { bookReducer, selectedBookReducer } from "./book-reducers";

const rootReducer = combineReducers({
    allbooks: bookReducer,
    book: selectedBookReducer
})

export default rootReducer;