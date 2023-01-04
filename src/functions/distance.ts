export interface ixy {
	x: number;
	y: number;
}

export function distance(a: ixy, b: ixy) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
