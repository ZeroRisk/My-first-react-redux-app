import {combineReducers} from 'redux';
import UserReducer from './user-reducer';
import PaymentReducer from './payments-reducer';
import PaymentActive from './payment-active-reducer';

const allReducers = combineReducers({
    users: UserReducer,
    payments: PaymentReducer,
    activePay: PaymentActive
});

export default allReducers;
