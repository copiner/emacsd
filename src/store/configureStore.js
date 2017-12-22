import {createStore,applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

export default function configureStore(initialState={}) {
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares,sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept( () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
