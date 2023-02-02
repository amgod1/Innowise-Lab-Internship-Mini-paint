import { useRef, useLayoutEffect, useEffect } from 'react';
import { iCanvasProps } from './iCanvasProps';
import { Alert, Box, Grid } from '@mui/material';
import { drawElement } from '../../functions/drawElement';
import { asyncImageUpload } from '../../functions/asyncImageUpload';
import startedBackgroundImage from '../../assets/a4.png';
import CanvasButtonGroup from './CanvasButtons/CanvasButtonGroup';
import InputFile from './InputFile';
import Uploaded from './Uploaded';
import NoAccess from '../NoAccess/NoAccess';

const rough = require('roughjs/bundled/rough.cjs');

const Canvas = (props: iCanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const observer = new ResizeObserver(entries => {
		const size = entries[0].contentRect.width;
		props.setClientWidth(size);
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			canvas.style.backgroundImage = `url(${startedBackgroundImage})`;
			canvas.style.backgroundSize = 'cover';
			if (props.imageUpload) {
				canvas.style.backgroundImage = `url(${URL.createObjectURL(
					props.imageUpload
				)})`;
				const img = new Image();
				img.src = URL.createObjectURL(props.imageUpload);
				img.onload = function () {
					if (props.clientWidth < img.width) {
						const percentage = (props.clientWidth * 100) / img.width - 5;
						props.setWidth(Math.trunc((img.width * percentage) / 100));
						props.setHeight(Math.trunc((img.height * percentage) / 100));
					} else {
						props.setWidth(img.width);
						props.setHeight(img.height);
					}
				};
			}
		}
		if (wrapperRef?.current) observer.observe(wrapperRef?.current);
	}, [props.imageUpload]);

	useLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext('2d');
			const roughCanvas = rough.canvas(canvas);
			if (context) {
				context.clearRect(0, 0, canvas.width, canvas.height);
			}
			props.elements.forEach(el => {
				drawElement(roughCanvas, context, el);
			});
		}
	}, [props.elements]);

	const handleMouseDown = (e: any) => {
		const { clientX, clientY } = e;
		props.handleMouseDown(clientX, clientY);
	};

	const handleMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		props.handleMouseMove(clientX, clientY);
	};

	const canvasToImage = () => {
		const result = asyncImageUpload(
			canvasRef.current,
			props.elements,
			props.width,
			props.height,
			props.imageUpload
		);
		result
			.then(() => {
				props.setPublishImage(true);
			})
			.catch(err => {
				props.setPublishImageError(err);
			});
	};
	return props.user ? (
		<Box ref={wrapperRef} sx={{ mt: 4 }}>
			<Grid
				container
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
			>
				{props.uploaded ? (
					<Uploaded />
				) : (
					<>
						{props.error ? (
							<Alert severity="error" sx={{ mb: 3 }}>
								{props.error}
							</Alert>
						) : (
							<canvas
								width={props.width}
								height={props.height}
								ref={canvasRef}
								style={{ backgroundSize: 'cover' }}
								onMouseDown={handleMouseDown}
								onMouseMove={handleMouseMove}
								onMouseUp={props.handleMouseUp}
							/>
						)}
						<CanvasButtonGroup
							imageUpload={props.imageUpload}
							tool={props.tool}
							setTool={props.setTool}
							strokeWidth={props.strokeWidth}
							setStrokeWidth={props.setStrokeWidth}
							showStrokeWidth={props.showStrokeWidth}
							setShowStrokeWidth={props.setShowStrokeWidth}
							strokeColor={props.strokeColor}
							setStrokeColor={props.setStrokeColor}
							fillColor={props.fillColor}
							setFillColor={props.setFillColor}
							disabledFill={props.disabledFill}
							setDisabledFill={props.setDisabledFill}
							elements={props.elements}
							setElements={props.setElements}
							resetAll={props.resetAll}
							canvasToImage={canvasToImage}
						/>
						<InputFile
							setImageUpload={props.setImageUpload}
							setPublishImageError={props.setPublishImageError}
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
