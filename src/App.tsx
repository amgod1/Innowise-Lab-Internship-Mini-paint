import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import Container from '@mui/material/Container';
import LoginContainer from './components/Login/LoginContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import SignUpContainer from './components/SignUp/SignUpContainer';
import CanvasContainer from './components/Canvas/CanvasConatiner';
import ImagesListContainer from './components/ImagesList/ImagesListContainer';

interface Props {
	darkMode: boolean;
}

const App = (props: Props) => {
	const darkTheme = createTheme({
		palette: {
			mode: props.darkMode ? 'dark' : 'light',
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<HashRouter>
				<Container>
					<CssBaseline />
					<HeaderContainer />
					<Routes>
						<Route path="/" element={<ImagesListContainer />} />
						<Route path="/login" element={<LoginContainer />} />
						<Route path="/signup" element={<SignUpContainer />} />
						<Route path="/canvas" element={<CanvasContainer />} />
					</Routes>
				</Container>
			</HashRouter>
		</ThemeProvider>
	);
};

export default App;
