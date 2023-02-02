export enum canvasActionTypes {
	SET_IMAGE_UPLOAD = 'SET_IMAGE_UPLOAD',
	SET_CLIENT_WIDTH = 'SET_CLIENT_WIDTH',
	SET_TOOL = 'SET_TOOL',
	SET_WIDTH = 'SET_WIDTH',
	SET_HEIGHT = 'SET_HEIGHT',
	SET_ELEMENTS = 'SET_ELEMENTS',
	SET_ACTION = 'SET_ACTION',
	SET_SHOW_STROKE_WIDTH = 'SET_SHOW_STROKE_WIDTH',
	SET_STROKE_WIDTH = 'SET_STROKE_WIDTH',
	SET_STROKE_COLOR = 'SET_STROKE_COLOR',
	SET_FILL_COLOR = 'SET_FILL_COLOR',
	SET_DISABLED_FILL = 'SET_DISABLED_FILL',
	SET_SELECTED_ELEMENT = 'SET_SELECTED_ELEMENT',
	HANDLE_MOUSE_DOWN = 'HANDLE_MOUSE_DOWN',
	HANDLE_MOUSE_MOVE = 'HANDLE_MOUSE_MOVE',
	HANDLE_MOUSE_UP = 'HANDLE_MOUSE_UP',
	RESET_ALL = 'RESET_ALL',
	PUBLISH_IMAGE_ERROR = 'PUBLISH_IMAGE_ERROR',
	PUBLISH_IMAGE = 'PUBLISH_IMAGE',
}

export interface CanvasState {
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
	error: string | null;
	uploaded: boolean;
}

export interface CanvasAction {
	type: string;
	payload?: any;
}
