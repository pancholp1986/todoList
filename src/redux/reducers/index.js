import { combineReducers } from 'redux';
import todoListReducers from './todoListReducers';
import userReducers from './userReducers';

export default combineReducers({
    todoList: todoListReducers,
    user: userReducers
});