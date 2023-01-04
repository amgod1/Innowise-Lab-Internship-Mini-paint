import { Typography, Button } from '@mui/material';
import { logOutUserWithConnect } from '../../functions/connectFirebase';

interface Props {
	user: string;
	onSetError: (error: string) => any;
	onLogOutAccountClick: () => void;
}

const AlreadyLogged = (props: Props) => {
	return (
		<>
			<Typography variant="h5" component="h2" align="center" sx={{ mt: 2 }}>
				You have already logged in as <em>{props.user}</em>
			</Typography>
			<Button
				variant="outlined"
				size="large"
				sx={{ mt: 2 }}
				onClick={async () => {
					await logOutUserWithConnect(props.onLogOutAccountClick, props.onSetError);
				}}
			>
				Log Out
			</Button>
		</>
	);
};

export default AlreadyLogged;
