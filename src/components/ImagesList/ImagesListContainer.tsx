import ImagesList from './ImagesList';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
	return {
		user: state.loginPage.user,
	};
};

const ImagesListContainer = connect(mapStateToProps)(ImagesList);
export default ImagesListContainer;
