import SignUp from './SignUp';
import { connect } from 'react-redux';
import {
	enterMailRegAC,
	enterPasswordRegAC,
	logInAccountAC,
	logOutAccountAC,
	setErrorAC,
} from '../../redux/Login/loginReducer';

const mapStateToProps = (state: any) => {
	return {
		mailReg: state.loginPage.mailReg,
		passwordReg: state.loginPage.passwordReg,
		user: state.loginPage.user,
		error: state.loginPage.error,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onMailRegChange: (e: string) => dispatch(enterMailRegAC(e)),
		onPasswordRegChange: (e: string) => dispatch(enterPasswordRegAC(e)),
		onLogInAccountClick: (user: string) => dispatch(logInAccountAC(user)),
		onLogOutAccountClick: () => dispatch(logOutAccountAC()),
		onSetError: (error: string) => dispatch(setErrorAC(error)),
	};
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUpContainer;
