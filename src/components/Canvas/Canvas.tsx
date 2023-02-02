import { useRef, useLayoutEffect, useEffect, FC } from 'react';
import { Alert, Box, Grid } from '@mui/material';
import { drawElement } from '../../functions/drawElement';
import { asyncImageUpload } from '../../functions/asyncImageUpload';
import startedBackgroundImage from '../../assets/a4.png';
import InputFile from '../InputFile/InputFile';
import Uploaded from '../Uploaded/Uploaded';
import NoAccess from '../NoAccess/NoAccess';
import CanvasButtonGroupContainer from '../CanvasButtonGroup/CanvasButtonGroupContainer';
import iCanvas from './Canvas.interface';

const rough = require('roughjs/bundled/rough.cjs');

const Canvas: FC<iCanvas> = ({
	user,
	imageUpload,
	clientWidth,
	width,
	height,
	elements,
	error,
	uploaded,
	setImageUpload,
	setClientWidth,
	setWidth,
	setHeight,
	handleMouseDown,
	handleMouseMove,
	handleMouseUp,
	setPublishImageError,
	setPublishImage,
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const observer = new ResizeObserver(entries => {
		const size = entries[0].contentRect.width;
		setClientWidth(size);
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			canvas.style.backgroundImage = `url(${startedBackgroundImage})`;
			canvas.style.backgroundSize = 'cover';
			if (imageUpload) {
				canvas.style.backgroundImage = `url(${URL.createObjectURL(imageUpload)})`;
				const img = new Image();
				img.src = URL.createObjectURL(imageUpload);
				img.onload = function () {
					if (clientWidth < img.width) {
						const percentage = (clientWidth * 100) / img.width - 5;
						setWidth(Math.trunc((img.width * percentage) / 100));
						setHeight(Math.trunc((img.height * percentage) / 100));
					} else {
						setWidth(img.width);
						setHeight(img.height);
					}
				};
			}
		}
		if (wrapperRef?.current) observer.observe(wrapperRef?.current);
	}, [imageUpload]);

	useLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext('2d');
			const roughCanvas = rough.canvas(canvas);
			if (context) {
				context.clearRect(0, 0, canvas.width, canvas.height);
			}
			elements.forEach(el => {
				drawElement(roughCanvas, context, el);
			});
		}
	}, [elements]);

	const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		const { clientX, clientY } = e;
		handleMouseDown(clientX, clientY);
	};

	const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		const { clientX, clientY } = e;
		handleMouseMove(clientX, clientY);
	};

	const canvasToImage = () => {
		const result = asyncImageUpload(
			canvasRef.current,
			elements,
			width,
			height,
			imageUpload
		);
		result
			.then(() => {
				setPublishImage(true);
			})
			.catch(err => {
				setPublishImageError(err);
			});
	};

	return user ? (
		<Box ref={wrapperRef} sx={{ mt: 4 }}>
			<Grid
				container
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
			>
				{uploaded ? (
					<Uploaded />
				) : (
					<>
						{error ? (
							<Alert severity="error" sx={{ mb: 3 }}>
								{error}
							</Alert>
						) : (
							<canvas
								width={width}
								height={height}
								ref={canvasRef}
								style={{ backgroundSize: 'cover' }}
								onMouseDown={onMouseDown}
								onMouseMove={onMouseMove}
								onMouseUp={handleMouseUp}
							/>
						)}
						<CanvasButtonGroupContainer canvasToImage={canvasToImage} />
						<InputFile
							setImageUpload={setImageUpload}
							setPublishImageError={setPublishImageError}
						/>
					</>
				)}
			</Grid>
		</Box>
	) : (
		<NoAccess />
	);
};

export default Canvas;
