// @flow
import { createAction } from 'redux-act';

export const fetchingStart = createAction('fetchingStart');
export const fetchingEnd = createAction('fetchingEnd');

export const loginActionRequest = createAction('loginAction');
export const loginActionResponse = createAction('loginActionResponse');
export const loginActionError = createAction('loginActionError');

export const changeForgotStatus = createAction('change status');

export const registrationActionRequest = createAction('registrationActionRequest');
export const registrationActionResponse = createAction('registrationActionResponse');
export const registrationActionError = createAction('registrationActionError');

export const forgotPasswordSmsActionRequest = createAction('forgotPasswordSmsActionRequest');
export const forgotPasswordSmsActionResponse = createAction('forgotPasswordSmsActionResponse');
export const forgotPasswordSmsActionError = createAction('forgotPasswordSmsActionError');

export const forgotPasswordNewPassActionRequest = createAction('forgotPasswordNewPassActionRequest');
export const forgotPasswordNewPassActionResponse = createAction('forgotPasswordNewPassActionResponse');
export const forgotPasswordNewPassActionError = createAction('forgotPasswordNewPassActionError');

export const verificationMessageActionRequest = createAction('verificationMessageActionRequest');
export const verificationMessageActionResponse = createAction('verificationMessageActionResponse');
export const verificationMessageActionError = createAction('verificationMessageActionError');

export const verificationPhoneActionRequest = createAction('verificationPhoneActionRequest');
export const verificationPhoneActionResponse = createAction('verificationPhoneActionResponse');
export const verificationPhoneActionError = createAction('verificationPhoneActionError');

export const userActionRequest = createAction('userActionRequest');
export const userActionResponse = createAction('userActionResponse');
export const userActionError = createAction('userActionError');

export const walletListRequest = createAction('walletListRequest');
export const walletListSuccess = createAction('walletListSuccess');
export const walletListError = createAction('walletListError');

export const currenciesListRequest = createAction('currenciesListRequest');
export const currenciesListSuccess = createAction('currenciesListSuccess');
export const currenciesListError = createAction('currenciesListError');

export const walletRequest = createAction('walletRequest');
export const walletSuccess = createAction('walletSuccess');
export const walletError = createAction('walletError');

export const walletIDRequest = createAction('walletIDRequest');
export const walletIDSuccess = createAction('walletIDSuccess');
export const walletIDError = createAction('walletIDError');

export const walletTransferRequest = createAction('walletTransferRequest');
export const walletTransferSuccess = createAction('walletTransferSuccess');
export const walletTransferError = createAction('walletTransferError');

export const walletWidthDrawRequest = createAction('walletWidthDrawRequest');
export const walletWidthDrawSuccess = createAction('walletWidthDrawSuccess');
export const walletWidthDrawError = createAction('walletWidthDrawError');

export const walletTransferHookRequest = createAction('walletTransferHookRequest');
export const walletTransferHookSuccess = createAction('walletTransferHookSuccess');
export const walletTransferHookError = createAction('walletTransferHookError');
