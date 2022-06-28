import { takeEvery } from 'redux-saga/effects';
import { increment } from '../store/countReducer';

const delay = (ms) => new Promise( res => setTimeout(res, ms))

export function* countWorker () {
    yield delay(1000)
}

export function* countWatcher () {
    yield takeEvery(increment, countWorker);
}

export default countWatcher;