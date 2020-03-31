import * as constants from './product.constants';

export const addProductToCart = (data) => ({ type: constants.ADD_PRODUCT_TO_CART, payload: data });
