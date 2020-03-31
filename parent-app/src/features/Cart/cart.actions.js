import * as constants from './cart.constants';

export const changeProductQty = (data) => ({ type: constants.CHANGE_PRODUCT_QTY, payload: data });
export const clearCart = () => ({ type: constants.CLEAR_CART });
