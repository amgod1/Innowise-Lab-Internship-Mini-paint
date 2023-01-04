import { createAction } from '@reduxjs/toolkit';
import { LoginState, loginActionTypes, LoginAction } from './loginTypes';

const initialState: LoginState = {
	mailIn: '',
	passwordIn: '',
	mailReg: '',
	passwordReg: '',
	user: localStorage.user ? localStorage.user : '',
	error: '',
};

const loginReducer = (
	state = initialState,
	action: LoginAction
): LoginState => {
	switch (action.type) {
		case loginActionTypes.UPDATE_MAIL_IN:
			return { ...state, mailIn: action.payload.newMailIn };
		case loginActionTypes.UPDATE_PASSWORD_IN:
			return { ...state, passwordIn: action.payload.newPasswordIn };
		case loginActionTypes.UPDATE_MAIL_REG:
			return { ...state, mailReg: action.payload.newMailReg };
		case loginActionTypes.UPDATE_PASSWORD_REG:
			return { ...state, passwordReg: action.payload.newPasswordReg };
		case loginActionTypes.CREATE_ACCOUNT:
			return {
				...state,
				mailReg: '',
				passwordReg: '',
				user: action.payload.user,
				error: '',
			};
		case loginActionTypes.LOG_IN_ACCOUNT:
			return {
				...state,
				mailIn: '',
				passwordIn: '',
				user: action.payload.user,
				error: '',
			};
		case loginActionTypes.SET_ERROR:
			return { ...state, error: action.payload.error };
		case loginActionTypes.LOG_OUT_ACCOUNT:
			return { ...state, user: '', error: '' };
		default:
			return state;
	}
};

// Action Creators

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

export default loginReducer;
