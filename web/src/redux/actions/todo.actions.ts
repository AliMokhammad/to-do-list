import { Action } from 'redux';

export interface NewTodo {
    title: string;
    description: string;
}

export interface Todo extends NewTodo {
    id: number;
}

/******* */

export const GET_TODO = 'GET_TODO';
export interface GetTodoAction extends Action {
    type: typeof GET_TODO;
}
export function getTodo(): GetTodoAction {
    return {
        type: GET_TODO
    };
}

/******* */

export const GET_TODO_DONE = 'GET_TODO_DONE';
export interface GetTodoDoneAction extends Action {
    type: typeof GET_TODO_DONE;
    todos: Todo[];
}
export function getTodoDone(todos: Todo[]): GetTodoDoneAction {
    return {
        type: GET_TODO_DONE, todos,
    };
}

/******* */

export const ADD_TODO = 'ADD_TODO';
export interface AddTodoAction extends Action {
    type: typeof ADD_TODO;
    todo: NewTodo;
}
export function addTodo(todo: NewTodo): AddTodoAction {
    return {
        type: ADD_TODO, todo,
    };
}

/******* */

export const ADD_TODO_DONE = 'ADD_TODO_DONE';
export interface AddTodoDoneAction extends Action {
    type: typeof ADD_TODO_DONE;
    todo: Todo;
}
export function addTodoDone(todo: Todo): AddTodoDoneAction {
    return {
        type: ADD_TODO_DONE, todo,
    };
}

/******* */

export const EDIT_TODO = 'EDIT_TODO';
export interface EditTodoAction extends Action {
    type: typeof EDIT_TODO;
    todo: Todo;
}
export function editTodo(todo: Todo): EditTodoAction {
    return {
        type: EDIT_TODO, todo,
    };
}

/******* */

export const EDIT_TODO_DONE = 'EDIT_TODO_DONE';
export interface EditTodoDoneAction extends Action {
    type: typeof EDIT_TODO_DONE;
    todo: Todo;
}
export function editTodoDone(todo: Todo): EditTodoDoneAction {
    return {
        type: EDIT_TODO_DONE, todo,
    };
}

/******* */

export const DELETE_TODO = 'DELETE_TODO';
export interface DeleteTodoAction extends Action {
    type: typeof DELETE_TODO;
    todoId: number;
}
export function deleteTodo(todoId: number): DeleteTodoAction {
    return {
        type: DELETE_TODO, todoId,
    };
}

/******* */

export const DELETE_TODO_DONE = 'DELETE_TODO_DONE';
export interface DeleteTodoDoneAction extends Action {
    type: typeof DELETE_TODO_DONE;
    todoId: number;
}
export function deleteTodoDone(todoId: number): DeleteTodoDoneAction {
    return {
        type: DELETE_TODO_DONE, todoId,
    };
}

