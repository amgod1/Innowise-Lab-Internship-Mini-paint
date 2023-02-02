import { iElement } from '../Canvas/Canvas.interface';

export default interface iCanvasButtonGroup {
	imageUpload: File | null;
	tool: string;
	elements: iElement[];
	strokeWidth: number;
	showStrokeWidth: boolean;
	strokeColor: string;
	fillColor: string;
	disabledFill: boolean;
	setTool: (tool: string) => void;
	setElements: (elements: iElement[]) => void;
	setStrokeWidth: (strokeWidth: number) => void;
	setShowStrokeWidth: (showStrokeWidth: boolean) => void;
	setStrokeColor: (strokeColor: string) => void;
	setFillColor: (fillColor: string) => void;
	setDisabledFill: (disabledFill: boolean) => void;
	resetAll: () => void;
	canvasToImage: () => void;
}
