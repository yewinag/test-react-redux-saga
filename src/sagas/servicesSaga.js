import { put, call, takeEvery, select } from 'redux-saga/effects';

import {loadingServices, loadedServices } from '../actions';
import { LOAD_SERVICES } from '../constants';

import { data } from '../constants/constants';

export const getPage = state => state.nextPage;

export function* handleLoad() {
    try {        
        yield put(loadingServices(data));
    } catch (error) {
        yield put(loadedServices(error));
    }
}

export default function* watchLoadData() {
    yield takeEvery(LOAD_SERVICES, handleLoad);
}
