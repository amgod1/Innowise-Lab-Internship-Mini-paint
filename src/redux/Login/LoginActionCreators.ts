import { createAction } from '@reduxjs/toolkit';
import { loginActionTypes } from './loginTypes';

export const enterMailRegAC = createAction(
	loginActionTypes.UPDATE_MAIL_REG,
	function prepare(newMailReg) {
		return { payload: { newMailReg } };
	}
);

export const enterPasswordRegAC = createAction(
	loginActionTypes.UPDATE_PASSWORD_REG,
	function prepare(newPasswordReg) {
		return { payload: { newPasswordReg } };
	}
);

export const enterMailInAC = createAction(
	loginActionTypes.UPDATE_MAIL_IN,
	function prepare(newMailIn) {
		return { payload: { newMailIn } };
	}
);

export const enterPasswordInAC = createAction(
	loginActionTypes.UPDATE_PASSWORD_IN,
	function prepare(newPasswordIn) {
		return { payload: { newPasswordIn } };
	}
);

export const createAccountAC = createAction(
	loginActionTypes.CREATE_ACCOUNT,
	function prepare(user) {
		return { payload: { user } };
	}
);

export const logInAccountAC = createAction(
	loginActionTypes.LOG_IN_ACCOUNT,
	function prepare(user) {
		return { payload: { user } };
	}
);

export const logOutAccountAC = createAction(loginActionTypes.LOG_OUT_ACCOUNT);

export const setErrorAC = createAction(
	loginActionTypes.SET_ERROR,
	function prepare(error) {
		return { payload: { error } };
	}
);
