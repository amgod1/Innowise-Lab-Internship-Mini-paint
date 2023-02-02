import { createAction } from '@reduxjs/toolkit';
import { appActionTypes } from './appTypes';

export const setDarkModeAC = createAction(
	appActionTypes.SET_DARK_MODE,
	function prepare(darkMode) {
		return { payload: { darkMode } };
	}
);
