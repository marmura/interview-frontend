import * as constants from './product.constants';
import { put } from 'redux-saga/effects';

export function* addProduct(data) {
    try {
        yield put({ type: constants.ADD_PRODUCT_TO_CART_SUCCESS, data: data.payload });
    } catch (err) {
        yield put({ type: constants.ADD_PRODUCT_TO_CART_ERROR, message: err.message });
    }
}
