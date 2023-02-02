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

export default loginReducer;
