import { Action } from 'redux';

export interface LoginUser {
    email: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    token: string;
}

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

export interface LogInAction extends Action {
    type: typeof LOG_IN;
    user: LoginUser;
}

export interface LogInSuccessAction extends Action {
    type: typeof LOG_IN_SUCCESS;
    user: User;
}

export interface LogOutAction extends Action {
    type: typeof LOG_OUT;
}

export function logIn(user: LoginUser): LogInAction {
    return { type: LOG_IN, user };
}

export function logInSuccess(user: User): LogInSuccessAction {
    return { type: LOG_IN_SUCCESS, user };
}

export function logOut(): LogOutAction {
    return { type: LOG_OUT };
}


