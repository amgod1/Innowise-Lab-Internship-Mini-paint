import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	logOutAccountAC,
	setErrorAC,
} from '../../redux/Login/LoginActionCreators';
import { setDarkModeAC } from '../../redux/App/appActionCreators';
import Header from './Header';

const HeaderContainer: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Header
			user={useAppSelector(state => state.loginPage.user)}
			darkMode={useAppSelector(state => state.app.darkMode)}
			onLogOutClick={() => dispatch(logOutAccountAC())}
			onSetError={(error: string) => dispatch(setErrorAC(error))}
			setDarkMode={(darkMode: boolean) => dispatch(setDarkModeAC(darkMode))}
		/>
	);
};
export default HeaderContainer;
