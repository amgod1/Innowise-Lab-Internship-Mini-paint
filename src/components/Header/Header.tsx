import { FC } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Paper, IconButton, Button, Box, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { logOutUserWithConnect } from '../../functions/connectFirebase';
import iHeader from './Header.interface';

const Header: FC<iHeader> = ({
	user,
	darkMode,
	onLogOutClick,
	onSetError,
	setDarkMode,
}) => {
	const setDarkModeHandle = () => {
		setDarkMode(!darkMode);
	};

	const onLogOutHandle = async () => {
		await logOutUserWithConnect(onLogOutClick, onSetError);
	};

	return (
		<Paper
			sx={{
				bgcolor: 'primary.main',
				color: 'primary.contrastText',
				p: 1,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<IconButton>
							<HomeIcon />
						</IconButton>
					</Link>
				</Box>
				<Box>
					<Switch checked={darkMode} onChange={setDarkModeHandle} />
					{user ? (
						<Button variant="contained" color="primary" onClick={onLogOutHandle}>
							Log Out
						</Button>
					) : (
						<Link to="/login" style={{ textDecoration: 'none' }}>
							<Button variant="contained" color="primary">
								Log In
							</Button>
						</Link>
					)}
				</Box>
			</Box>
		</Paper>
	);
};

export default Header;
