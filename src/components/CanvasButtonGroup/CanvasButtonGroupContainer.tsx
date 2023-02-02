import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	setToolAC,
	setElementsAC,
	setShowStrokeWidthAC,
	setStrokeWidthAC,
	setStrokeColorAC,
	setFillColorAC,
	setDisabledFillAC,
	resetAllAC,
} from '../../redux/Canvas/canvasActionCreators';
import { iElement } from '../Canvas/Canvas.interface';
import CanvasButtonGroup from './CanvasButtonGroup';

const CanvasButtonGroupContainer: FC<{ canvasToImage: () => void }> = ({
	canvasToImage,
}) => {
	const dispatch = useAppDispatch();

	return (
		<CanvasButtonGroup
			imageUpload={useAppSelector(state => state.canvas.imageUpload)}
			tool={useAppSelector(state => state.canvas.tool)}
			elements={useAppSelector(state => state.canvas.elements)}
			strokeWidth={useAppSelector(state => state.canvas.strokeWidth)}
			showStrokeWidth={useAppSelector(state => state.canvas.showStrokeWidth)}
			strokeColor={useAppSelector(state => state.canvas.strokeColor)}
			fillColor={useAppSelector(state => state.canvas.fillColor)}
			disabledFill={useAppSelector(state => state.canvas.disabledFill)}
			setTool={(tool: string) => dispatch(setToolAC(tool))}
			setElements={(elements: iElement[]) => dispatch(setElementsAC(elements))}
			setStrokeWidth={(strokeWidth: number) =>
				dispatch(setStrokeWidthAC(strokeWidth))
			}
			setShowStrokeWidth={(showStrokeWidth: boolean) =>
				dispatch(setShowStrokeWidthAC(showStrokeWidth))
			}
			setStrokeColor={(strokeColor: string) =>
				dispatch(setStrokeColorAC(strokeColor))
			}
			setFillColor={(fillColor: string) => dispatch(setFillColorAC(fillColor))}
			setDisabledFill={(disabledFill: boolean) =>
				dispatch(setDisabledFillAC(disabledFill))
			}
			resetAll={() => dispatch(resetAllAC())}
			canvasToImage={canvasToImage}
		/>
	);
};

export default CanvasButtonGroupContainer;
