import { createAction } from '@reduxjs/toolkit';
import { canvasActionTypes } from './canvasTypes';

export const setImageUploadAC = createAction(
	canvasActionTypes.SET_IMAGE_UPLOAD,
	function prepare(imageUpload) {
		return { payload: { imageUpload } };
	}
);

export const setClientWidthAC = createAction(
	canvasActionTypes.SET_CLIENT_WIDTH,
	function prepare(clientWidth) {
		return { payload: { clientWidth } };
	}
);

export const setToolAC = createAction(
	canvasActionTypes.SET_TOOL,
	function prepare(tool) {
		return { payload: { tool } };
	}
);

export const setWidthAC = createAction(
	canvasActionTypes.SET_WIDTH,
	function prepare(width) {
		return { payload: { width } };
	}
);

export const setHeightAC = createAction(
	canvasActionTypes.SET_HEIGHT,
	function prepare(height) {
		return { payload: { height } };
	}
);

export const setElementsAC = createAction(
	canvasActionTypes.SET_ELEMENTS,
	function prepare(elements) {
		return { payload: { elements } };
	}
);

export const setActionAC = createAction(
	canvasActionTypes.SET_ACTION,
	function prepare(action) {
		return { payload: { action } };
	}
);

export const setShowStrokeWidthAC = createAction(
	canvasActionTypes.SET_SHOW_STROKE_WIDTH,
	function prepare(showStrokeWidth) {
		return { payload: { showStrokeWidth } };
	}
);

export const setStrokeWidthAC = createAction(
	canvasActionTypes.SET_STROKE_WIDTH,
	function prepare(strokeWidth) {
		return { payload: { strokeWidth } };
	}
);

export const setStrokeColorAC = createAction(
	canvasActionTypes.SET_STROKE_COLOR,
	function prepare(strokeColor) {
		return { payload: { strokeColor } };
	}
);

export const setFillColorAC = createAction(
	canvasActionTypes.SET_FILL_COLOR,
	function prepare(fillColor) {
		return { payload: { fillColor } };
	}
);

export const setDisabledFillAC = createAction(
	canvasActionTypes.SET_DISABLED_FILL,
	function prepare(disabledFill) {
		return { payload: { disabledFill } };
	}
);

export const setSelectedElementAC = createAction(
	canvasActionTypes.SET_SELECTED_ELEMENT,
	function prepare(selectedElement) {
		return { payload: { selectedElement } };
	}
);

export const handleMouseDownAC = createAction(
	canvasActionTypes.HANDLE_MOUSE_DOWN,
	function prepare(clientX, clientY) {
		return { payload: { clientX, clientY } };
	}
);

export const handleMouseMoveAC = createAction(
	canvasActionTypes.HANDLE_MOUSE_MOVE,
	function prepare(clientX, clientY) {
		return { payload: { clientX, clientY } };
	}
);

export const handleMouseUpAC = createAction(canvasActionTypes.HANDLE_MOUSE_UP);

export const resetAllAC = createAction(canvasActionTypes.RESET_ALL);

export const setPublishImageErrorAC = createAction(
	canvasActionTypes.PUBLISH_IMAGE_ERROR,
	function prepare(error) {
		return { payload: { error } };
	}
);

export const setPublishImageAC = createAction(
	canvasActionTypes.PUBLISH_IMAGE,
	function prepare(result) {
		return { payload: { result } };
	}
);
