import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Login/loginReducer';
import canvasReducer from './Canvas/canvasReducer';
import appReducer from './App/appReducer';

export const store = configureStore({
	reducer: combineReducers({
		app: appReducer,
		canvas: canvasReducer,
		loginPage: loginReducer,
	}),
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}),
});
