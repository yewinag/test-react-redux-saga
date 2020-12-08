import { all } from 'redux-saga/effects';

import servicesSaga from './servicesSaga';

export default function* rootSaga() {
    yield all([servicesSaga()]);
}
