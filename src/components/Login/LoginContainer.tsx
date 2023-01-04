import Login from './Login';
import { connect } from 'react-redux';
import {
	enterMailInAC,
	enterMailRegAC,
	enterPasswordInAC,
	enterPasswordRegAC,
	logInAccountAC,
	logOutAccountAC,
	setErrorAC,
} from '../../redux/Login/loginReducer';

const mapStateToProps = (state: any) => {
	return {
		mailIn: state.loginPage.mailIn,
		passwordIn: state.loginPage.passwordIn,
		mailReg: state.loginPage.mailReg,
		passwordReg: state.loginPage.passwordReg,
		user: state.loginPage.user,
		error: state.loginPage.error,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onMailInChange: (e: string) => dispatch(enterMailInAC(e)),
		onPasswordInChange: (e: string) => dispatch(enterPasswordInAC(e)),
		onMailRegChange: (e: string) => dispatch(enterMailRegAC(e)),
		onPasswordRegChange: (e: string) => dispatch(enterPasswordRegAC(e)),
		onLogInAccountClick: (user: string) => dispatch(logInAccountAC(user)),
		onLogOutAccountClick: () => dispatch(logOutAccountAC()),
		onSetError: (error: string) => dispatch(setErrorAC(error)),
	};
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
