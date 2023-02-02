import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	enterMailInAC,
	enterMailRegAC,
	enterPasswordInAC,
	enterPasswordRegAC,
	logInAccountAC,
	logOutAccountAC,
	setErrorAC,
} from '../../redux/Login/LoginActionCreators';
import Authorization from './Authorization';

const AuthorizationContainer: FC<{ type: boolean }> = ({ type }) => {
	const dispatch = useAppDispatch();

	return type ? (
		<Authorization
			upperText="Log in your account:"
			buttonText="Log in"
			swapLink="/signup"
			swapText="Don't have an account? Sign up"
			mail={useAppSelector(state => state.loginPage.mailIn)}
			password={useAppSelector(state => state.loginPage.passwordIn)}
			user={useAppSelector(state => state.loginPage.user)}
			error={useAppSelector(state => state.loginPage.error)}
			onMailChange={(e: string) => dispatch(enterMailInAC(e))}
			onPasswordChange={(e: string) => dispatch(enterPasswordInAC(e))}
			onLogInClick={(user: string) => dispatch(logInAccountAC(user))}
			onLogOutClick={() => dispatch(logOutAccountAC())}
			onSetError={(error: string) => dispatch(setErrorAC(error))}
		/>
	) : (
		<Authorization
			upperText="Create new account:"
			buttonText="Create"
			swapLink="/login"
			swapText="Already have an account? Log in"
			mail={useAppSelector(state => state.loginPage.mailReg)}
			password={useAppSelector(state => state.loginPage.passwordReg)}
			user={useAppSelector(state => state.loginPage.user)}
			error={useAppSelector(state => state.loginPage.error)}
			onMailChange={(e: string) => dispatch(enterMailRegAC(e))}
			onPasswordChange={(e: string) => dispatch(enterPasswordRegAC(e))}
			onLogInClick={(user: string) => dispatch(logInAccountAC(user))}
			onLogOutClick={() => dispatch(logOutAccountAC())}
			onSetError={(error: string) => dispatch(setErrorAC(error))}
		/>
	);
};

export default AuthorizationContainer;
