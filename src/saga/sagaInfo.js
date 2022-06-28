import { select, put, takeLatest } from 'redux-saga/effects';
import { getState } from '../store/configurationReducer';
import { getCount, isBlocked } from '../store/countReducer';
import { getInfo } from '../store/infoReducer';

export function* infoWorker({payload}) {
    if (!payload) {
        const blocked = yield select(isBlocked);
        const count = yield select(getCount);
        const position = yield select(getState);
        const blockedInfo = blocked ? "блокировка" : "нет";  
        const positionText = position === 0 ? "Сетка" : "вертикально";
        const info = yield [positionText, count, blockedInfo].join();
        yield put(getInfo(info))
    }
}

export function* infoWatcher () {
    yield takeLatest(getInfo, infoWorker);
}

export default infoWatcher;