import { createElement } from './createElement';

export function updateElement(
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
	fillColor: string,
	elements: any[]
) {
	const updatedElement = createElement(
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
		fillColor
	);

	const elementsCopy = [...elements];
	if (tool === 'pencil') {
		const diff: number = (document.body.clientWidth - width) / 2;
		const scrollDiff: number = Math.trunc(document.documentElement.scrollTop);

		elementsCopy[id].points = [
			...elementsCopy[id].points,
			{ x: x2 - diff, y: y2 - 88 + scrollDiff },
		];
		elementsCopy[id].strokeColor = strokeColor;
	} else {
		elementsCopy[id] = updatedElement;
	}
	return elementsCopy;
}
