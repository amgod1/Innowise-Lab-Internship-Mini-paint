import { iSelectedElement } from '../../redux/Canvas/canvasTypes';

export interface iCanvasProps {
	user: string;
	imageUpload: any | null;
	clientWidth: number;
	tool: string;
	width: number;
	height: number;
	elements: any[];
	action: string;
	showStrokeWidth: boolean;
	strokeWidth: number;
	strokeColor: string;
	fillColor: string;
	disabledFill: boolean;
	selectedElement: iSelectedElement | null;
	error: string | null;
	uploaded: boolean;

	setImageUpload: (imageUpload: any) => any;
	setClientWidth: (clientWidth: number) => any;
	setTool: (tool: string) => any;
	setWidth: (width: number) => any;
	setHeight: (height: number) => any;
	setElements: (elements: any[]) => any;
	setAction: (action: string) => any;
	setShowStrokeWidth: (showStrokeWidth: boolean) => any;
	setStrokeWidth: (strokeWidth: number) => any;
	setStrokeColor: (strokeColor: string) => any;
	setFillColor: (fillColor: string) => any;
	setDisabledFill: (disabledFill: boolean) => any;
	setSelectedElement: (selectedElement: iSelectedElement | null) => any;
	handleMouseDown: (clientX: number, clientY: number) => any;
	handleMouseMove: (clientX: number, clientY: number) => any;
	handleMouseUp: () => void;
	resetAll: () => void;
	setPublishImageError: (error: string) => void;
	setPublishImage: (result: boolean) => void;
}
