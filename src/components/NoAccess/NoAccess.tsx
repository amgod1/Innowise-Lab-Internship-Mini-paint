import { Alert, AlertTitle, Typography } from '@mui/material';

const NoAccess = () => {
	return (
		<Alert sx={{ mt: 4 }} severity="error">
			<AlertTitle>Error</AlertTitle>
			<Typography variant="h4" component="p">
				Only authorized users have access to this page!
			</Typography>
		</Alert>
	);
};

export default NoAccess;
