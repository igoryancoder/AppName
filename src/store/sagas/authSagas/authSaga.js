import { takeLatest, call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import {
	loginActionRequest,
	loginActionResponse,
	registrationActionRequest,
	registrationActionResponse,
	registrationActionError,
	forgotPasswordSmsActionRequest,
	forgotPasswordSmsActionResponse,
	forgotPasswordSmsActionError,
	forgotPasswordNewPassActionRequest,
	forgotPasswordNewPassActionResponse,
	forgotPasswordNewPassActionError,
	verificationMessageActionRequest,
	verificationMessageActionResponse,
	verificationMessageActionError,
	verificationPhoneActionRequest,
	verificationPhoneActionResponse,
	verificationPhoneActionError,
	userActionRequest,
	userActionResponse,
	userActionError,
	currenciesListRequest,
	fetchingStart,
	fetchingEnd,
	walletListRequest,
} from '../../actions';
import {
	VERIFICATION_CODE_SCREEN,
	LOGIN_SCREEN,
	OVERVIEW_TAB,
	SET_SECURITY_CODE_SCREEN,
	VERIFICATION_CONFIRM,
} from '../../../constants';
import { messageFire } from '../../../constants';
import { Storage } from '../../../utils/storage';
import { Requests } from '../../../requests';

function* requestLoginFunc({ payload }) {
	const { phone, password, isForgot } = payload;
	const values = {
		phone,
		password,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.LOGIN, { values });
		console.log('values', values);
		console.log('response', { ...response.data, ...{ phone, password, isForgot } });
		yield put(loginActionResponse({ ...response.data, ...{ phone, password, isForgot } }));
		if (isForgot) {
			yield put(
				NavigationActions.navigate({ routeName: SET_SECURITY_CODE_SCREEN, params: { phone, password, isForgot } }),
			);
		} else {
			yield put(NavigationActions.navigate({ routeName: OVERVIEW_TAB }));
		}
		if (!response.success) {
			throw response;
		}
		yield put(fetchingEnd());
		yield put(walletListRequest({ accessToken: response.data.accessToken }));
		yield put(currenciesListRequest({ accessToken: response.data.accessToken }));
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* requestRegistrationFunc({ payload }) {
	const { phone, password } = payload;
	const values = {
		phone,
		password,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.REGISTRATION, { values });
		console.log('values111', values);
		console.log('response reg', response);
		yield put(registrationActionResponse(response.data));
		// yield put(verificationMessageActionRequest({ phone, password }));
		yield put(
			NavigationActions.navigate({ routeName: VERIFICATION_CODE_SCREEN, params: { phone, password, isSignUp: true } }),
		);
		if (!response.success) {
			throw response;
		}
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* forgotPasswordSmsFunc({ payload }) {
	const { phone, password } = payload;
	console.log('phone, password', phone, password);
	const values = {
		phone,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.FORGOT_PASSWORD_REQUEST_SMS, { values });
		console.log('values', values);
		console.log('response', response);
		// yield put((response));
		if (!response.success) {
			throw response;
		}
		yield put(NavigationActions.navigate({ routeName: VERIFICATION_CODE_SCREEN, params: { phone, password } }));
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('forgotPasswordSmsFunc err', err);
	}
}

function* forgotPasswordNewPassFunc({ payload }) {
	const { pin, phone, password } = payload;
	const values = {
		phone,
		code: pin,
		newPassword: password,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.FORGOT_PASSWORD_NEW_PASSWORD, { values });
		console.log('values', values);
		console.log('response', response);
		Storage.set({ key: 'cred', value: JSON.stringify({ phone, password }) });
		yield put(NavigationActions.navigate({ routeName: VERIFICATION_CONFIRM, params: { phone, password } }));
		if (!response.success) {
			throw response;
		}
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err.message);
	}
}

function* verificationMessageFunc({ payload }) {
	const { phone, password } = payload;
	const values = {
		phone,
		password,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.REQUEST_PHONE_VERIFICATION_MESSAGE, { values });
		yield put(NavigationActions.navigate({ routeName: VERIFICATION_CODE_SCREEN, params: { phone, password } }));
		console.log('values', values);
		console.log('response', response);
		// yield put((response));
		if (!response.success) {
			throw response;
		}
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* verificationPhoneFunc({ payload }) {
	const { phone, pin, password } = payload;
	const values = {
		code: pin,
		phone,
		password,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.VERIFY_PHONE, { values });
		console.log('values', values);
		console.log('response', response);
		// yield put((response));
		yield put(fetchingEnd());
		yield put(NavigationActions.navigate({ routeName: SET_SECURITY_CODE_SCREEN, params: { phone, password } }));
		if (!response.success) {
			throw response;
		}
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

export default function* authSaga() {
	yield takeLatest([loginActionRequest], requestLoginFunc);
	yield takeLatest([registrationActionRequest], requestRegistrationFunc);
	yield takeLatest([forgotPasswordSmsActionRequest], forgotPasswordSmsFunc);
	yield takeLatest([forgotPasswordNewPassActionRequest], forgotPasswordNewPassFunc);
	yield takeLatest([verificationMessageActionRequest], verificationMessageFunc);
	yield takeLatest([verificationPhoneActionRequest], verificationPhoneFunc);
}
