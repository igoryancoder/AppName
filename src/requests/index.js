/* eslint-disable max-len */
// @flow

import Request from '../utils/request';
// import { API_VANSOGEO } from '../constants';

export const Requests = {
	USER: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.get({ path: 'user', body: values, returnable }),
	LOGIN: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: 'user/login', body: values, returnable }),
	REGISTRATION: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: 'user/register', body: values, returnable }),
	FORGOT_PASSWORD_REQUEST_SMS: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: 'user/forgot_password_request_sms', body: values, returnable }),
	FORGOT_PASSWORD_NEW_PASSWORD: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: 'user/forgot_password_new_password', body: values, returnable }),
	REQUEST_PHONE_VERIFICATION_MESSAGE: ({
		values,
		returnable,
	}: {
		values: Object,
		returnable: boolean,
	}): Promise<void> => Request.post({ path: 'user/request_phone_verification_message', body: values, returnable }),
	VERIFY_PHONE: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: 'user/verify_phone', body: values, returnable }),
	// -------------------
	WALLET: ({ values, header, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: 'wallet', headers: { Authorization: `${header}` }, body: values, returnable }),
	WALLET_LIST: ({ values, header, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.get({ path: 'wallet/list', body: values, headers: { Authorization: `${header}` }, returnable }),
	WALLET_ID: ({ values, header, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.get({ path: `wallet/${values}`, headers: { Authorization: `${header}`, body: {} }, returnable }),
	//
	WALLET_TRANSFER: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: '/wallet/transfer', body: values, returnable }),
	WALLET_WITHDRAW: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: '/wallet/withdraw', body: values, returnable }),
	WALLET_TRANSFER_HOOK: ({ values, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.post({ path: '/wallet​/transfer_hook', body: values, returnable }),
	CURRENCIES_LIST: ({ values, header, returnable }: { values: Object, returnable: boolean }): Promise<void> =>
		Request.get({ path: `wallet/currencies_list`, headers: { Authorization: `${header}`, body: values }, returnable }),
	// '/wallet/by_user'
};
