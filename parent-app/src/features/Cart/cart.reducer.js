import * as constants from './cart.constants';

export default function cart(state = {
    items: []
}, action) {
    switch (action.type) {
        case constants.ADD_PRODUCT_TO_CART_SUCCESS: {
            if(state.items.length) {
                const item = {...state.items.find((i) => i.id === action.data.id)};
                item.qty = ++item.qty;
                return {
                    items: [
                        item
                    ]
                };
            } else {
                return {
                    items: [
                        action.data
                    ]
                };
            }
        }
        case constants.CHANGE_PRODUCT_QTY_SUCCESS: {
            if(action.data.qty < 1) {
                return {
                    ...state,
                    errorMessage: 'QTY can not be less than 1'
                };
            }
            const item = {...state.items.find((i) => i.id === action.data.id)};
            item.qty = action.data.qty;
            return {
                items: [
                    item
                ]
            };
        }
        case constants.CHANGE_PRODUCT_QTY_ERROR: {
            return {
                ...state,
                errorMessage: action.message
            };
        }
        default:
            return state
    }
}
