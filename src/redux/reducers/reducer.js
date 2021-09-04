import { combineReducers } from "redux";
import todos from './todos';
import filter from './filter';
import columns from './columns';

const reducer = combineReducers({
    todos,
    filter,
    columns
})

export default reducer;