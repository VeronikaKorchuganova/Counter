import { all } from "redux-saga/effects";
import countWatcher from "./sagaCount";
import infoWatcher from "./sagaInfo";

function* rootSaga() {
    yield all([countWatcher(), infoWatcher()])
}

export default rootSaga;