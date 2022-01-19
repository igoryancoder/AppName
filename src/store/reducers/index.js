// @flow
import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { loadingReducer } from './loading-reducer';
import { walletsReducer } from './wallet-reducer';

export default combineReducers({
	loginReducer,
	loadingReducer,
	walletsReducer,
});
