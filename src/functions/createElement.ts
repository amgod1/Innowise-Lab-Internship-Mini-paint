const rough = require('roughjs/bundled/rough.cjs');
const generator = rough.generator();

export function createElement(
	id: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	width: number,
	tool: string,
	strokeColor: string,
	strokeWidth: number,
	disabledFill: boolean,
	fillColor: string
) {
	const scrollDiff: number = Math.trunc(document.documentElement.scrollTop);
	const diff: number = (document.body.clientWidth - width) / 2;
	let roughElement;
	switch (tool) {
		case 'line':
			roughElement = generator.line(
				x1 - diff,
				y1 - 88 + scrollDiff,
				x2 - diff,
				y2 - 88 + scrollDiff,
				{
					roughness: 0,
					stroke: strokeColor,
					strokeWidth,
				}
			);
			break;
		case 'rectangle':
			roughElement = generator.rectangle(
				x1 - diff,
				y1 - 88 + scrollDiff,
				x2 - x1,
				y2 - y1,
				{
					roughness: 0,
					stroke: strokeColor,
					strokeWidth,
					fill: !disabledFill ? fillColor : '',
					fillStyle: 'solid',
				}
			);
			break;
		case 'circle':
			roughElement = generator.circle(
				x1 < x2 ? x1 + (x2 - x1) / 2 - diff : x2 + (x1 - x2) / 2 - diff,
				y1 < y2
					? y1 + (y2 - y1) / 2 - 88 + scrollDiff
					: y2 + (y1 - y2) / 2 - 88 + scrollDiff,
				Math.abs(x2 - x1) > Math.abs(y2 - y1) ? x2 - x1 : y2 - y1,
				{
					roughness: 0,
					stroke: strokeColor,
					strokeWidth,
					fill: !disabledFill ? fillColor : '',
					fillStyle: 'solid',
				}
			);
			break;
		case 'pencil':
			return {
				id,
				x1,
				y1,
				width,
				tool,
				strokeColor,
				strokeWidth,
				points: [{ x: x1 - diff, y: y1 - 88 + scrollDiff }],
			};
		default:
			throw new Error('Type not recognised');
	}
	if (roughElement) {
		return {
			id,
			x1,
			y1,
			x2,
			y2,
			width,
			tool,
			strokeColor,
			strokeWidth,
			disabledFill,
			fillColor,
			roughElement,
		};
	}
}
