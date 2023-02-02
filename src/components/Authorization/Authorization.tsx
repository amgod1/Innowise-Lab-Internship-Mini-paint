import { FC } from 'react';
import { Grid, TextField, Box, Button, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { logInUserWithConnect } from '../../functions/connectFirebase';
import AlreadyLogged from '../AlreadyLogged/AlreadyLogged';
import iAuthorization from './Authorization.interface';

const Authorization: FC<iAuthorization> = ({
	upperText,
	buttonText,
	swapLink,
	swapText,
	mail,
	password,
	user,
	error,
	onMailChange,
	onPasswordChange,
	onLogInClick,
	onLogOutClick,
	onSetError,
}) => {
	const onMailChangeHandle = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		onMailChange(e.target.value);
	};

	const onPasswordChangeHandle = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		onPasswordChange(e.target.value);
	};

	const onLogIn = async () => {
		await logInUserWithConnect(mail, password, onLogInClick, onSetError);
	};

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
					{!user ? (
						<>
							{error && (
								<Alert severity="error" sx={{ mb: 3 }}>
									{error}
								</Alert>
							)}
							<Typography variant="h5" component="h3">
								{upperText}
							</Typography>
							<TextField
								variant="outlined"
								label="mail"
								size="small"
								sx={{ mt: 1 }}
								value={mail}
								onChange={onMailChangeHandle}
							/>
							<TextField
								variant="outlined"
								label="password"
								size="small"
								sx={{ mt: 1 }}
								value={password}
								onChange={onPasswordChangeHandle}
							/>
							<Button variant="contained" sx={{ mt: 2 }} onClick={onLogIn}>
								{buttonText}
							</Button>
							<Link to={swapLink} style={{ color: '#1976d2' }}>
								<Typography variant="h6" component="h4" align="center" sx={{ mt: 3 }}>
									{swapText}
								</Typography>
							</Link>
						</>
					) : (
						<AlreadyLogged
							user={user}
							onSetError={onSetError}
							onLogOutClick={onLogOutClick}
						/>
					)}
				</Box>
			</Grid>
		</Grid>
	);
};

export default Authorization;
