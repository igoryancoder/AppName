import { takeLatest, call, put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import {
	walletListRequest,
	walletListSuccess,
	walletListError,
	//
	currenciesListRequest,
	currenciesListSuccess,
	walletRequest,
	walletIDRequest,
	walletTransferRequest,
	walletWidthDrawRequest,
	walletTransferHookRequest,
	//
	fetchingStart,
	fetchingEnd,
} from '../../actions';

import { getToken } from '../../selectors';
import { messageFire } from '../../../constants';
import { Requests } from '../../../requests';

function* currenciesListFunc({ payload }) {
	const { accessToken } = payload;
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.CURRENCIES_LIST, { header: accessToken });
		// console.log('values', values);
		if (!response.success) {
			throw response;
		}
		yield put(currenciesListSuccess(response));
		console.log('response currenciesListFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* walletListFunc({ payload }) {
	const { accessToken } = payload;
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.WALLET_LIST, { header: accessToken });
		// console.log('values', values);
		if (!response.success) {
			throw response;
		}
		yield put(walletListSuccess(response.data));
		console.log('response walletListFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* walletFunc({ payload }) {
	const { currency } = payload;
	const accessToken = yield select(getToken);
	const values = {
		currency,
	};
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.WALLET, { values, header: accessToken });
		// console.log('values', values);
		console.log('response walletFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* walletIDFunc({ payload }) {
	const { id } = payload;
	const accessToken = yield select(getToken);
	try {
		yield put(fetchingStart());
		const response = yield call(Requests.WALLET_ID, { values: id, header: accessToken });
		console.log('values', { id, header: accessToken });
		console.log('response walletIDFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* walletTransferFunc({ payload }) {
	// const {  } = payload;
	try {
		yield put(fetchingStart());
		// const response = yield call(Requests.WALLET_TRANSFER, { });
		// console.log('values', values);
		console.log('response walletTransferFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* walletWidthDrawFunc({ payload }) {
	// const {  } = payload;
	try {
		yield put(fetchingStart());
		// const response = yield call(Requests.WALLET_WITHDRAW, { });
		// console.log('values', values);
		console.log('response walletWidthDrawFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

function* walletTransferHookFunc({ payload }) {
	// const {  } = payload;
	try {
		yield put(fetchingStart());
		// const response = yield call(Requests.WALLET_TRANSFER_HOOK, { });
		// console.log('values', values);
		console.log('response walletTransferHookFunc', response);
		yield put(fetchingEnd());
	} catch (err) {
		yield put(fetchingEnd());
		messageFire('Error', err.message);
		console.log('err', err);
	}
}

export default function* walletSaga() {
	yield takeLatest([currenciesListRequest], currenciesListFunc);
	yield takeLatest([walletListRequest], walletListFunc);
	yield takeLatest([walletRequest], walletFunc);
	yield takeLatest([walletIDRequest], walletIDFunc);
	yield takeLatest([walletTransferRequest], walletTransferFunc);
	yield takeLatest([walletWidthDrawRequest], walletWidthDrawFunc);
	yield takeLatest([walletTransferHookRequest], walletTransferHookFunc);
}
