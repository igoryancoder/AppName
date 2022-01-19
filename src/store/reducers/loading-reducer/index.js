// @flow
import { createReducer } from 'redux-act';
import { fetchingStart, fetchingEnd } from '../../actions';

export type LoadingReducerType = {
	isFetching: boolean,
};

const INITIAL_STATE: LoadingReducerType = {
	isFetching: false,
};

export const loadingReducer = createReducer(
	{
		[fetchingStart]: (state: LoadingReducerType) => ({
			...state,
			isFetching: true,
		}),
		[fetchingEnd]: (state: LoadingReducerType) => ({
			...state,
			isFetching: false,
		}),
	},
	INITIAL_STATE,
);
