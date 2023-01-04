import Canvas from './Canvas';
import { connect } from 'react-redux';
import {
	setImageUploadAC,
	setClientWidthAC,
	setToolAC,
	setWidthAC,
	setHeightAC,
	setElementsAC,
	setActionAC,
	setShowStrokeWidthAC,
	setStrokeWidthAC,
	setStrokeColorAC,
	setFillColorAC,
	setDisabledFillAC,
	setSelectedElementAC,
	resetAllAC,
	handleMouseDownAC,
	handleMouseUpAC,
	handleMouseMoveAC,
	setPublishImageAC,
	setPublishImageErrorAC,
} from '../../redux/Canvas/canvasReducer';
import { iSelectedElement } from '../../redux/Canvas/canvasTypes';

const mapStateToProps = (state: any) => {
	return {
		user: state.loginPage.user,
		imageUpload: state.canvas.imageUpload,
		clientWidth: state.canvas.clientWidth,
		tool: state.canvas.tool,
		width: state.canvas.width,
		height: state.canvas.height,
		elements: state.canvas.elements,
		action: state.canvas.action,
		showStrokeWidth: state.canvas.showStrokeWidth,
		strokeWidth: state.canvas.strokeWidth,
		strokeColor: state.canvas.strokeColor,
		fillColor: state.canvas.fillColor,
		disabledFill: state.canvas.disabledFill,
		selectedElement: state.canvas.selectedElement,
		error: state.canvas.error,
		uploaded: state.canvas.uploaded,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		setImageUpload: (imageUpload: any) => dispatch(setImageUploadAC(imageUpload)),
		setClientWidth: (clientWidth: number) =>
			dispatch(setClientWidthAC(clientWidth)),
		setTool: (tool: string) => dispatch(setToolAC(tool)),
		setWidth: (width: number) => dispatch(setWidthAC(width)),
		setHeight: (height: number) => dispatch(setHeightAC(height)),
		setElements: (elements: any[]) => dispatch(setElementsAC(elements)),
		setAction: (action: string) => dispatch(setActionAC(action)),
		setShowStrokeWidth: (showStrokeWidth: boolean) =>
			dispatch(setShowStrokeWidthAC(showStrokeWidth)),
		setStrokeWidth: (strokeWidth: number) =>
			dispatch(setStrokeWidthAC(strokeWidth)),
		setStrokeColor: (strokeColor: string) =>
			dispatch(setStrokeColorAC(strokeColor)),
		setFillColor: (fillColor: string) => dispatch(setFillColorAC(fillColor)),
		setDisabledFill: (disabledFill: boolean) =>
			dispatch(setDisabledFillAC(disabledFill)),
		setSelectedElement: (selectedElement: iSelectedElement | null) =>
			dispatch(setSelectedElementAC(selectedElement)),
		handleMouseDown: (clientX: number, clientY: number) =>
			dispatch(handleMouseDownAC(clientX, clientY)),
		handleMouseMove: (clientX: number, clientY: number) =>
			dispatch(handleMouseMoveAC(clientX, clientY)),
		handleMouseUp: () => dispatch(handleMouseUpAC()),
		resetAll: () => dispatch(resetAllAC()),
		setPublishImageError: (error: string) =>
			dispatch(setPublishImageErrorAC(error)),
		setPublishImage: (result: boolean) => dispatch(setPublishImageAC(result)),
	};
};

const CanvasContainer = connect(mapStateToProps, mapDispatchToProps)(Canvas);
export default CanvasContainer;
