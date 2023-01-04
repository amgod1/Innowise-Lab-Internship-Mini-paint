import { getStroke } from 'perfect-freehand';

function getSvgPathFromStroke(stroke: any[]) {
	if (!stroke.length) return '';

	const d = stroke.reduce(
		(acc: any, [x0, y0]: number[], i: number, arr: any[]) => {
			const [x1, y1] = arr[(i + 1) % arr.length];
			acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
			return acc;
		},
		['M', ...stroke[0], 'Q']
	);

	d.push('Z');
	return d.join(' ');
}

export function drawElement(
	roughCanvas: any,
	context: CanvasRenderingContext2D | null,
	el: any
) {
	switch (el.tool) {
		case 'line':
		case 'rectangle':
		case 'circle':
			roughCanvas.draw(el.roughElement);
			break;
		case 'pencil':
			if (context) context.fillStyle = el.strokeColor;
			const myStroke = getSvgPathFromStroke(
				getStroke(el.points, { size: el.strokeWidth * 2 })
			);
			context?.fill(new Path2D(myStroke));
			break;
		default:
			throw new Error('Type not recognised');
	}
}
