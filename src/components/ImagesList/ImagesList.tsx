import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../firebase.config';
import { decodeDate } from '../../functions/decodeDate';
import NoAccess from '../Canvas/NoAccess';
import CheckboxUser from './CheckboxUser';

interface Props {
	user: string;
}

const ImagesList = (props: Props) => {
	const [imageList, setImageList] = useState<any[]>([]);
	const [creators, setCreators] = useState<any[]>([]);
	const [filteredCreators, setFilteredCreators] = useState<any[]>([]);

	const imageListRef = ref(storage, 'images/');
	useEffect(() => {
		listAll(imageListRef).then(response => {
			response.items.forEach(item => {
				getDownloadURL(item).then(url => {
					setImageList(prev => [...prev, { name: item.name, url }]);
					setCreators(prev => [
						...prev,
						item.name.slice(22, item.name.indexOf('__', 22)),
					]);
				});
			});
		});
	}, []);

	const allCreators = [...new Set(creators)].map(el => (
		<CheckboxUser
			key={el}
			user={el}
			filteredCreators={filteredCreators}
			setFilteredCreators={setFilteredCreators}
		/>
	));

	const allImages = [
		...new Map(imageList.map(item => [item.url, item])).values(),
	]
		.filter(el => {
			if (filteredCreators.length >= 1) {
				for (let i = 0; i < filteredCreators.length; i++) {
					if (el.name.includes(filteredCreators[i])) {
						return;
					}
				}
			}
			return el;
		})
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
		<>
			{props.user ? (
				<Box textAlign="center" sx={{ mb: 2 }}>
					<Typography variant="h4" component="h1" sx={{ mt: 4 }}>
						This page contains all uploaded images:
					</Typography>
					<Link to="/canvas" style={{ textDecoration: 'none' }}>
						<Button variant="outlined" sx={{ mt: 2 }} size="large">
							Upload image
						</Button>
					</Link>
					<Grid
						container
						direction="column"
						justifyContent="flex-start"
						alignItems="center"
					>
						<Typography variant="h6" component="h6" sx={{ mt: 1 }}>
							<i>Show images by:</i>
						</Typography>
						{allCreators}
						{allImages}
					</Grid>
				</Box>
			) : (
				<NoAccess />
			)}
		</>
	);
};

export default ImagesList;
