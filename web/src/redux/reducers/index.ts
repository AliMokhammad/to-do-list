import { Reducer } from 'redux';
import { Actions, } from '../actions';
import { User, LOG_IN_SUCCESS, LOG_OUT } from '../actions/user.actions';
import { Todo, GET_TODO_DONE, ADD_TODO_DONE, EDIT_TODO_DONE, DELETE_TODO_DONE } from '../actions/todo.actions';

export interface State {
    user: User | null;
    todos: Todo[];
}

const initialState: State = {
    user: null,
    todos: [],
};

export const reducer: Reducer<State, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            return {
                ...state, user: action.user,
            };

        case LOG_OUT:
            return {
                ...state, user: null,
            };

        case GET_TODO_DONE:
            return {
                ...state, todos: action.todos,
            };

        case ADD_TODO_DONE:
            return {
                ...state, todos: [...state.todos, action.todo],
            };

        case EDIT_TODO_DONE:
            return {
                ...state, todos: state.todos.map((todo: Todo) => todo.id === action.todo.id ? action.todo : todo),
            };

        case DELETE_TODO_DONE:
            return {
                ...state, todos: state.todos.filter((todo: Todo) => todo.id !== action.todoId),
            };

        default:
            return state;
    }
};
