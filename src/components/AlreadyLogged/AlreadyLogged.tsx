import { FC } from 'react';
import { Typography, Button } from '@mui/material';
import { logOutUserWithConnect } from '../../functions/connectFirebase';
import iAlreadyLogged from './AlreadyLogged.interface';

const AlreadyLogged: FC<iAlreadyLogged> = ({
	user,
	onSetError,
	onLogOutClick,
}) => {
	const onLogOutHandle = async () => {
		await logOutUserWithConnect(onLogOutClick, onSetError);
	};

	return (
		<>
			<Typography variant="h5" component="h2" align="center" sx={{ mt: 2 }}>
				You have already logged in as <em>{user}</em>
			</Typography>
			<Button
				variant="outlined"
				size="large"
				sx={{ mt: 2 }}
				onClick={onLogOutHandle}
			>
				Log Out
			</Button>
		</>
	);
};

export default AlreadyLogged;
