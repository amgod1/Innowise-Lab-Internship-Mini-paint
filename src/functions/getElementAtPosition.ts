import { isWithinElement } from './isWithinElement';

export function getElementAtPosition(x: number, y: number, allItems: any[]) {
	return allItems.find(el => isWithinElement(x, y, el));
}
