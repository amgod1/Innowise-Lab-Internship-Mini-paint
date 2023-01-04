import { ref, uploadString } from 'firebase/storage';
import { storage } from '../firebase.config';
import { drawElement } from './drawElement';
import { encodeDate } from './encodeDate';
import { getUser } from './getUser';
import { getDate } from './getDate';
const rough = require('roughjs/bundled/rough.cjs');

export const asyncImageUpload = async (
	canvas: HTMLCanvasElement | null,
	elements: any[],
	width: number,
	height: number,
	imageUpload: any
) => {
	const roughCanvas = rough.canvas(canvas);

	if (canvas) {
		const context = canvas.getContext('2d');
		if (context) {
			const img = new Image();
			img.src = URL.createObjectURL(imageUpload);
			img.onload = async function () {
				context.clearRect(0, 0, width, height);
				context.drawImage(img, 0, 0, width, height);
				elements.forEach(el => {
					drawElement(roughCanvas, context, el);
				});
				const dataURL = canvas.toDataURL();

				const storageRef = ref(
					storage,
					`images/${
						encodeDate(getDate()) +
						getUser() +
						imageUpload.name.slice(0, imageUpload.name.indexOf('.')) +
						'__' +
						crypto.randomUUID()
					}`
				);

				await uploadString(storageRef, dataURL, 'data_url');
			};
		}
	}
};
