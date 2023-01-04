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
import { createUserWithConnect } from '../../functions/connectFirebase';
import AlreadyLogged from '../Login/AlreadyLogged';

interface Props {
	mailReg: string;
	passwordReg: string;
	user: string;
	error: string;
	onMailRegChange: (value: string) => any;
	onPasswordRegChange: (value: string) => any;
	onLogInAccountClick: (user: string) => any;
	onLogOutAccountClick: () => void;
	onSetError: (error: string) => any;
}

const SignUp = (props: Props) => {
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
								Create new account:
							</Typography>
							<TextField
								variant="outlined"
								label="mail"
								size="small"
								sx={{ mt: 1 }}
								value={props.mailReg}
								onChange={(
									e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
								) => props.onMailRegChange(e.target.value)}
							/>
							<TextField
								variant="outlined"
								label="password"
								size="small"
								sx={{ mt: 1 }}
								value={props.passwordReg}
								onChange={(
									e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
								) => props.onPasswordRegChange(e.target.value)}
							/>
							<Button
								variant="contained"
								sx={{ mt: 2 }}
								onClick={async () => {
									await createUserWithConnect(
										props.mailReg,
										props.passwordReg,
										props.onLogInAccountClick,
										props.onSetError
									);
								}}
							>
								Create
							</Button>
							<Link to="/login" style={{ textDecoration: 'none' }}>
								<LinkMui>
									<Typography variant="h6" component="h4" align="center" sx={{ mt: 3 }}>
										Already have an account? Log in
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

export default SignUp;
