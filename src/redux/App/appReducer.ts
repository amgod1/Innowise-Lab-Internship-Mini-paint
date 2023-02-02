import { AppState, appActionTypes, AppAction } from './appTypes';

const initialState: AppState = {
	darkMode: localStorage.darkMode ? Boolean(localStorage.darkMode) : false,
};

const appReducer = (state = initialState, action: AppAction): AppState => {
	switch (action.type) {
		case appActionTypes.SET_DARK_MODE:
			localStorage.setItem('darkMode', action.payload.darkMode);
			return { ...state, darkMode: action.payload.darkMode };
		default:
			return state;
	}
};

export default appReducer;
