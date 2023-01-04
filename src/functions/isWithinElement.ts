import { distance, ixy } from './distance';
import { circleArea } from './circleArea';

export function isWithinElement(x: number, y: number, element: any) {
	const { tool, x1, x2, y1, y2 } = element;
	if (tool === 'rectangle') {
		const minX = Math.min(x1, x2);
		const maxX = Math.max(x1, x2);
		const minY = Math.min(y1, y2);
		const maxY = Math.max(y1, y2);
		return x >= minX && x <= maxX && y >= minY && y <= maxY;
	} else if (tool === 'line') {
		const a: ixy = { x: x1, y: y1 };
		const b: ixy = { x: x2, y: y2 };
		const c: ixy = { x, y };
		const offset = distance(a, b) - (distance(a, c) + distance(c, b));
		return Math.abs(offset) < 1;
	} else if (tool === 'circle') {
		const radius =
			Math.abs(x2 - x1) > Math.abs(y2 - y1) ? (x2 - x1) / 2 : (y2 - y1) / 2;
		if (x1 < x2 && y1 < y2) {
			return (
				circleArea(x, y, x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2) <=
				Math.pow(radius, 2)
			);
		} else if (x1 < x2 && y1 > y2) {
			return (
				circleArea(x, y, x1 + (x2 - x1) / 2, y2 + (y1 - y2) / 2) <=
				Math.pow(radius, 2)
			);
		} else if (x1 < x2 && y1 < y2) {
			return (
				circleArea(x, y, x2 + (x1 - x2) / 2, y1 + (y2 - y1) / 2) <=
				Math.pow(radius, 2)
			);
		} else if (x1 < x2 && y1 > y2) {
			return (
				circleArea(x, y, x2 + (x1 - x2) / 2, y2 + (y1 - y2) / 2) <=
				Math.pow(radius, 2)
			);
		}
	}
}
