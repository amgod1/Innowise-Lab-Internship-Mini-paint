export enum loginActionTypes {
	UPDATE_MAIL_IN = 'UPDATE_MAIL_IN',
	UPDATE_PASSWORD_IN = 'UPDATE_PASSWORD_IN',
	UPDATE_MAIL_REG = 'UPDATE_MAIL_REG',
	UPDATE_PASSWORD_REG = 'UPDATE_PASSWORD_REG',
	CREATE_ACCOUNT = 'CREATE_ACCOUNT',
	LOG_IN_ACCOUNT = 'LOG_IN_ACCOUNT',
	LOG_OUT_ACCOUNT = 'LOG_OUT_ACCOUNT',
	SET_ERROR = 'SET_ERROR',
}

export interface LoginState {
	mailIn: string;
	passwordIn: string;
	mailReg: string;
	passwordReg: string;
	user: string;
	error: string;
}

interface UpdateTextInputAction {
	type: string;
	payload: any;
}

export type LoginAction = UpdateTextInputAction;
