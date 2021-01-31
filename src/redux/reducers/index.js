import {combineReducers} from 'redux';

import filters from './filters';
import cart from './cart';


const rootReducer = combineReducers({
    filters,
    cart
});

export default rootReducer ;