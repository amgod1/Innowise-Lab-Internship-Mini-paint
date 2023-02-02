export default interface iCanvas {
	user: string;
	imageUpload: File | null;
	clientWidth: number;
	width: number;
	height: number;
	elements: iElement[];
	error: string | null;
	uploaded: boolean;
	setImageUpload: (imageUpload: File) => void;
	setClientWidth: (clientWidth: number) => void;
	setWidth: (width: number) => void;
	setHeight: (height: number) => void;
	handleMouseDown: (clientX: number, clientY: number) => void;
	handleMouseMove: (clientX: number, clientY: number) => void;
	handleMouseUp: () => void;
	setPublishImageError: (error: string) => void;
	setPublishImage: (result: boolean) => void;
}

export interface iElement {
	disabledFill?: boolean;
	fillColor?: string;
	id: number;
	points?: iPoints[];
	roughElement?: unknown;
	strokeColor: string;
	strokeWidth: number;
	tool: string;
	width: number;
	x1: number;
	x2?: number;
	y1: number;
	y2?: number;
}

interface iPoints {
	x: number;
	y: number;
}
