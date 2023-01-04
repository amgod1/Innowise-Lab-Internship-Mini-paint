import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../firebase.config';
import { decodeDate } from '../../functions/decodeDate';

interface Props {
	user: string;
}

const ImagesList = (props: Props) => {
	const [imageList, setImageList] = useState<any[]>([]);

	const imageListRef = ref(storage, 'images/');
	useEffect(() => {
		listAll(imageListRef).then(response => {
			response.items.forEach(item => {
				getDownloadURL(item).then(url => {
					setImageList(prev => [...prev, { name: item.name, url }]);
				});
			});
		});
	}, []);

	const allImages = [
		...new Map(imageList.map(item => [item.url, item])).values(),
	]
		.sort(
			(a, b) =>
				new Date(decodeDate(b.name.slice(0, 20))).valueOf() -
				new Date(decodeDate(a.name.slice(0, 20))).valueOf()
		)
		.map(el => (
			<img
				src={el.url}
				alt={el.name}
				key={el.url}
				width="75%"
				style={{ marginTop: '10px' }}
			/>
		));

	return (
		<Box textAlign="center" sx={{ mb: 2 }}>
			<Typography variant="h4" component="h1" sx={{ mt: 4 }}>
				This page contains all available drawings for viewing:
			</Typography>
			{props.user && (
				<Link to="/canvas" style={{ textDecoration: 'none' }}>
					<Button variant="outlined" sx={{ mt: 2 }} size="large">
						Upload image
					</Button>
				</Link>
			)}
			<Grid
				container
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
			>
				{allImages}
			</Grid>
		</Box>
	);
};

export default ImagesList;
