import { combineReducers } from 'redux';

import cart from './features/Cart/cart.reducer';

const rootReducer = combineReducers({
    cart
});

export default rootReducer;
