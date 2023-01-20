import { put, takeLatest, call } from "redux-saga/effects";
import {
    GET_TODO, getTodoDone, ADD_TODO, addTodoDone,
    EDIT_TODO, editTodoDone, DELETE_TODO, deleteTodoDone,
    AddTodoAction, EditTodoAction, DeleteTodoAction
} from '../actions/todo.actions';
import { performGetTodo, performAddTodo, performEditTodo, performDeleteTodo } from "../network/todo"

function* handleGetTodo(): IterableIterator<any> {
    const respponse: any = yield call(performGetTodo)
    if (!respponse.success) {
        yield put(getTodoDone([]))
        return
    }
    yield put(getTodoDone(respponse.data.todos));
}

export function* watchGetTodo() {
    yield takeLatest(GET_TODO, handleGetTodo);
}

function* handleAddTodo({ todo }: AddTodoAction): IterableIterator<any> {
    const respponse: any = yield call(performAddTodo, todo)
    if (!respponse.success) {
        alert('error')
        return
    }
    yield put(addTodoDone(respponse.data.todo));
}

export function* watchAddTodo() {
    yield takeLatest(ADD_TODO, handleAddTodo);
}

function* handleEditTodo({ todo }: EditTodoAction): IterableIterator<any> {
    const respponse: any = yield call(performEditTodo, todo)
    if (!respponse.success) {
        alert('error')
        return
    }
    yield put(editTodoDone(respponse.data.todo));
}

export function* watchEditTodo() {
    yield takeLatest(EDIT_TODO, handleEditTodo);
}

function* handleDeleteTodo({ todoId }: DeleteTodoAction): IterableIterator<any> {
    const respponse: any = yield call(performDeleteTodo, todoId)
    if (!respponse.success) {
        alert('error')
        return
    }
    yield put(deleteTodoDone(respponse.data.todoId));
}

export function* watchDeleteTodo() {
    yield takeLatest(DELETE_TODO, handleDeleteTodo);
}