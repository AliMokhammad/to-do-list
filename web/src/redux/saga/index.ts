import { fork } from "redux-saga/effects";
import * as user from "./user.watcher";
import * as todo from "./todo.watcher";

const sagas: any = Object.values({
  ...user,
  ...todo
});


export default function* rootSaga() {
  for (let index: number = 0; index < sagas.length; index++) {
    yield fork(sagas[index]);
  }
}
