import {
	Grid,
	TextField,
	Box,
	Button,
	Typography,
	Alert,
	Link as LinkMui,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { logInUserWithConnect } from '../../functions/connectFirebase';
import AlreadyLogged from './AlreadyLogged';

interface Props {
	mailIn: string;
	passwordIn: string;
	user: string;
	error: string;
	onMailInChange: (value: string) => any;
	onPasswordInChange: (value: string) => any;
	onLogInAccountClick: (user: string) => any;
	onLogOutAccountClick: () => void;
	onSetError: (error: string) => any;
}

const Login = (props: Props) => {
	return (
		<Grid container justifyContent="center" sx={{ mt: 4 }}>
			<Grid item md={5}>
				<Box
					sx={{
						minWidth: '280px',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{!props.user ? (
						<>
							{props.error && (
								<Alert severity="error" sx={{ mb: 3 }}>
									{props.error}
								</Alert>
							)}
							<Typography variant="h5" component="h3">
								Log in your account:
							</Typography>
							<TextField
								variant="outlined"
								label="mail"
								size="small"
								sx={{ mt: 1 }}
								value={props.mailIn}
								onChange={(
									e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
								) => props.onMailInChange(e.target.value)}
							/>
							<TextField
								variant="outlined"
								label="password"
								size="small"
								sx={{ mt: 1 }}
								value={props.passwordIn}
								onChange={(
									e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
								) => props.onPasswordInChange(e.target.value)}
							/>
							<Button
								variant="contained"
								sx={{ mt: 2 }}
								onClick={async () => {
									await logInUserWithConnect(
										props.mailIn,
										props.passwordIn,
										props.onLogInAccountClick,
										props.onSetError
									);
								}}
							>
								Log in
							</Button>
							<Link to="/signup" style={{ textDecoration: 'none' }}>
								<LinkMui>
									<Typography variant="h6" component="h4" align="center" sx={{ mt: 3 }}>
										Don't have an account? Sign up
									</Typography>
								</LinkMui>
							</Link>
						</>
					) : (
						<AlreadyLogged
							user={props.user}
							onSetError={props.onSetError}
							onLogOutAccountClick={props.onLogOutAccountClick}
						/>
					)}
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
