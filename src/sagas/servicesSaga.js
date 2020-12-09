import { put, call, takeEvery } from 'redux-saga/effects';

import { receiveFilterData } from '../actions';
import { REQUEST_DATA } from '../constants/actionsTypes';
import { filterDataFun } from '../utils';

export function* handleLoad(payload) {    
    try {        
        const res = yield call(filterDataFun, payload.payload);        
        yield put(receiveFilterData(res));
    } catch (error) {
        console.log(error)
    }
}

export default function* watchLoadData() {
    yield takeEvery(REQUEST_DATA, handleLoad);
}
