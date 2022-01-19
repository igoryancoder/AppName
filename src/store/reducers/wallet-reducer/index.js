// @flow
import { createReducer } from 'redux-act';
import { currenciesListSuccess, walletListSuccess } from '../../actions';

export type WalletsReducerData = {
	isFetching: Boolean,
	currencyArray: any,
};
// TODO all
const INITIAL_STATE: WalletsReducerData = {
	isFetching: false,
	currencyArray: [],
	wallets: null,
};

export const walletsReducer = createReducer(
	{
		[currenciesListSuccess]: (state: WalletsReducerData, payload) => ({
			...state,
			currencyArray: payload.data,
			isFetching: false,
		}),
		[walletListSuccess]: (state: WalletsReducerData, payload) => ({
			...state,
			wallets: payload,
			isFetching: false,
		}),
	},
	INITIAL_STATE,
);
