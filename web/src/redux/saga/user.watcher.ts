import { put, takeLatest, call } from "redux-saga/effects";
import { LOG_IN, logInSuccess, LogInAction } from '../actions/user.actions';
import { performLogin } from "../network/user"

function* handleUserLogin({ user }: LogInAction): IterableIterator<any> {
    const respponse: any = yield call(performLogin, user)
    if (!respponse.success) return
    localStorage.setItem("TOKEN", respponse.data.user.token)
    yield put(logInSuccess(respponse.data.user));
}

export function* watchUserLogin() {
    yield takeLatest(LOG_IN, handleUserLogin);
}