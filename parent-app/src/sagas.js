import { takeEvery, all } from 'redux-saga/effects';

import * as productConstants from './features/Product/product.constants';
import * as cartConstants from './features/Cart/cart.constants';

import { addProduct } from './features/Product/product.saga';
import { changeProductQty } from './features/Cart/cart.saga';

export default function* rootSaga() {
    yield all([
        takeEvery(productConstants.ADD_PRODUCT_TO_CART, addProduct),
        takeEvery(cartConstants.CHANGE_PRODUCT_QTY, changeProductQty),
    ])
}
