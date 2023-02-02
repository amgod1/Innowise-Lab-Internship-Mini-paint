import { Alert, AlertTitle, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Uploaded = () => {
	return (
		<>
			<Alert sx={{ mt: 4 }}>
				<AlertTitle>Success</AlertTitle>
				<Typography variant="h6" component="p">
					Image has been successfully uploaded. You can see it on the main page of
					the application now.
				</Typography>
			</Alert>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<Button variant="outlined" sx={{ mt: 2 }} size="large">
					See all images
				</Button>
			</Link>
		</>
	);
};

export default Uploaded;
