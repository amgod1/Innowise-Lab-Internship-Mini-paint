import Header from './Header';
import { connect } from 'react-redux';
import { logOutAccountAC, setErrorAC } from '../../redux/Login/loginReducer';
import { setDarkModeAC } from '../../redux/App/appReducer';

const mapStateToProps = (state: any) => {
	return {
		user: state.loginPage.user,
		darkMode: state.app.darkMode,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onLogOutAccountClick: () => dispatch(logOutAccountAC()),
		onSetError: (error: string) => dispatch(setErrorAC(error)),
		setDarkMode: (darkMode: boolean) => dispatch(setDarkModeAC(darkMode)),
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
