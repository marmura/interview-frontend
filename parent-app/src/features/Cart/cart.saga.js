import * as constants from './cart.constants';
import { put } from 'redux-saga/effects';

export function* changeProductQty(data) {
    try {
        yield put({ type: constants.CHANGE_PRODUCT_QTY_SUCCESS, data: data.payload });
    } catch (err) {
        yield put({ type: constants.CHANGE_PRODUCT_QTY_ERROR, message: err.message });
    }
}
