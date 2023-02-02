import { createElement } from '../../functions/createElement';
import { updateElement } from '../../functions/updateElement';
import { CanvasState, canvasActionTypes, CanvasAction } from './canvasTypes';

const initialState: CanvasState = {
	imageUpload: null,
	clientWidth: 0,
	tool: 'pencil',
	width: 420,
	height: 420,
	elements: [],
	action: 'none',
	showStrokeWidth: false,
	strokeWidth: 1,
	strokeColor: '#000000',
	fillColor: '#000000',
	disabledFill: true,
	error: null,
	uploaded: false,
};

const canvasReducer = (
	state = initialState,
	action: CanvasAction
): CanvasState => {
	switch (action.type) {
		case canvasActionTypes.SET_IMAGE_UPLOAD:
			return {
				...state,
				imageUpload: action.payload.imageUpload,
				elements: [],
				error: null,
			};
		case canvasActionTypes.SET_CLIENT_WIDTH:
			return { ...state, clientWidth: Math.round(action.payload.clientWidth) };
		case canvasActionTypes.SET_TOOL:
			return { ...state, tool: action.payload.tool };
		case canvasActionTypes.SET_WIDTH:
			return { ...state, width: action.payload.width };
		case canvasActionTypes.SET_HEIGHT:
			return { ...state, height: action.payload.height };
		case canvasActionTypes.SET_ELEMENTS:
			return { ...state, elements: action.payload.elements };
		case canvasActionTypes.SET_ACTION:
			return { ...state, action: action.payload.action };
		case canvasActionTypes.SET_SHOW_STROKE_WIDTH:
			return { ...state, showStrokeWidth: action.payload.showStrokeWidth };
		case canvasActionTypes.SET_STROKE_WIDTH:
			return { ...state, strokeWidth: action.payload.strokeWidth };
		case canvasActionTypes.SET_STROKE_COLOR:
			return { ...state, strokeColor: action.payload.strokeColor };
		case canvasActionTypes.SET_FILL_COLOR:
			return { ...state, fillColor: action.payload.fillColor };
		case canvasActionTypes.SET_DISABLED_FILL:
			return { ...state, disabledFill: action.payload.disabledFill };
		case canvasActionTypes.HANDLE_MOUSE_DOWN:
			const id = state.elements.length;
			const element = createElement(
				id,
				action.payload.clientX,
				action.payload.clientY,
				action.payload.clientX,
				action.payload.clientY,
				state.width,
				state.tool,
				state.strokeColor,
				state.strokeWidth,
				state.disabledFill,
				state.fillColor
			);
			return {
				...state,
				elements: [...state.elements, element],
				action: 'drawing',
			};
		case canvasActionTypes.HANDLE_MOUSE_MOVE:
			if (state.action === 'drawing') {
				const {
					x1,
					y1,
					width,
					tool,
					strokeColor,
					strokeWidth,
					disabledFill,
					fillColor,
				} = state.elements[state.elements.length - 1];
				const updatedElements = updateElement(
					state.elements.length - 1,
					x1,
					y1,
					action.payload.clientX,
					action.payload.clientY,
					width,
					tool,
					strokeColor,
					strokeWidth,
					disabledFill,
					fillColor,
					state.elements
				);
				return { ...state, elements: updatedElements };
			}
			return state;
		case canvasActionTypes.HANDLE_MOUSE_UP:
			return { ...state, action: 'none' };
		case canvasActionTypes.RESET_ALL:
			return {
				...state,
				elements: [],
				width: 420,
				height: 420,
				imageUpload: null,
			};
		case canvasActionTypes.PUBLISH_IMAGE_ERROR:
			return { ...state, error: action.payload.error };
		case canvasActionTypes.PUBLISH_IMAGE:
			return { ...state, uploaded: action.payload.result };
		default:
			return state;
	}
};

export default canvasReducer;
