import { all } from 'redux-saga/effects';
import authSaga from './authSagas/authSaga';
import walletSaga from './walletsSagas/walletSaga';

export default function* rootSaga() {
	yield all([authSaga(), walletSaga()]);
}
