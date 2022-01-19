// @flow
import { createReducer } from 'redux-act';
import {
	loginActionRequest,
	loginActionResponse,
	loginActionError,
	registrationActionResponse,
	changeForgotStatus,
} from '../../actions';

export type LoginReducerData = {
	accessToken: any,
	refreshToken: any,
	user: any,
	credentials: any,
	isForgot: Boolean,
	isFetching: boolean,
	error: string,
};

const INITIAL_STATE: LoginReducerData = {
	accessToken: null,
	refreshToken: null,
	user: null,
	credentials: {},
	isForgot: false,
	isFetching: false,
	error: '',
};

export const loginReducer = createReducer(
	{
		[loginActionRequest]: (state: LoginReducerData) => ({
			...state,
			isFetching: true,
		}),
		[loginActionResponse]: (state: LoginReducerData, payload) => ({
			...state,
			isFetching: false,
			credentials: { password: payload.password, phone: payload.phone },
			isForgot: payload.isForgot,
			accessToken: payload.accessToken,
			refreshToken: payload.refreshToken,
			user: payload.user,
		}),
		[changeForgotStatus]: (state: LoginReducerData, payload) => ({
			...state,
			isForgot: payload.isForgot,
		}),
		[loginActionError]: (state: LoginReducerData, payload) => ({
			...state,
			isFetching: false,
		}),
		[registrationActionResponse]: (state, payload) => ({
			...state,
			isFetching: false,
			user: payload,
		}),
	},
	INITIAL_STATE,
);
