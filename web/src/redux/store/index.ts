import { createStore, Store, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { reducer, State } from '../reducers';
import { Actions } from '../actions';
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,];

const store: Store<State, Actions> = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store
