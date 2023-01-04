import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
	return {
		darkMode: state.app.darkMode,
	};
};

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
