import { getData, postData, putData, deleteData } from "./apiClient";
import { NewTodo, Todo } from '../actions/todo.actions';

export const performGetTodo = async () =>
  await getData({ endpoint: "/todos" });

export const performAddTodo = async (body: NewTodo) =>
  await postData({ endpoint: "/todos", body });

export const performEditTodo = async (body: Todo) =>
  await putData({ endpoint: `/todos/${body.id}`, body });

export const performDeleteTodo = async (todoId: number) =>
  await deleteData({ endpoint: `/todos/${todoId}` });

