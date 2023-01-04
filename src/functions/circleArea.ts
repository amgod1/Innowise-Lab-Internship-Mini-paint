export const circleArea = (
	currentX: number,
	currentY: number,
	circleX: number,
	circleY: number
) => Math.pow(currentX - circleX, 2) + Math.pow(currentY - circleY, 2);
