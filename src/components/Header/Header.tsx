import { Link } from 'react-router-dom';
import { Paper, IconButton, Button, Box, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { logOutUserWithConnect } from '../../functions/connectFirebase';

interface Props {
	user: string;
	darkMode: boolean;
	onLogOutAccountClick: () => void;
	onSetError: (error: string) => any;
	setDarkMode: (darkMode: boolean) => void;
}

const Header = (props: Props) => {
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
					<Switch
						checked={props.darkMode}
						onChange={() => {
							props.setDarkMode(!props.darkMode);
						}}
					/>
					{props.user ? (
						<Button
							variant="contained"
							color="primary"
							onClick={async () => {
								await logOutUserWithConnect(
									props.onLogOutAccountClick,
									props.onSetError
								);
							}}
						>
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
