export enum appActionTypes {
	SET_DARK_MODE = 'SET_DARK_MODE',
}

export interface AppState {
	darkMode: boolean;
}

export interface AppAction {
	type: string;
	payload: any;
}
