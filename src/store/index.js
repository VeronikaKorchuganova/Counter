import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { countReducer } from './countReducer';
import { configurationReducer } from './configurationReducer';
import { infoReducer } from './infoReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers ({
    count: countReducer,
    configuration: configurationReducer,
    info: infoReducer,
})

const loggerMiddleware = store => next => action => {
    console.log(action);
    next(action);
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, loggerMiddleware));

sagaMiddleware.run(rootSaga);