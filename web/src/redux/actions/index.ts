import { LogInAction, LogInSuccessAction, LogOutAction } from "./user.actions"
import { AddTodoAction, GetTodoDoneAction, AddTodoDoneAction, EditTodoAction, EditTodoDoneAction, DeleteTodoAction, DeleteTodoDoneAction } from "./todo.actions"

export type Actions = LogInAction | LogInSuccessAction | LogOutAction | GetTodoDoneAction | AddTodoAction | AddTodoDoneAction | EditTodoAction | EditTodoDoneAction | DeleteTodoAction | DeleteTodoDoneAction
