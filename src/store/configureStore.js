import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

export default function configureStore(initialState={}) {
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares, sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept( () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
