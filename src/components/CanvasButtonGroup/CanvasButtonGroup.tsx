import { FC } from 'react';
import { ButtonGroup } from '@mui/material';
import CanvasButtonDraw from '../Controls/CanvasButtonDraw';
import ButtonStrokeWidth from '../Controls/ButtonStrokeWidth';
import ButtonStrokeColor from '../Controls/ButtonStrokeColor';
import ButtonFillColor from '../Controls/ButtonFillColor';
import ButtonUndoDelete from '../Controls/ButtonUndoDelete';
import ButtonPublish from '../Controls/ButtonPublish';
import iCanvasButtonGroup from './CanvasButtonGroup.interface';

const CanvasButtonGroup: FC<iCanvasButtonGroup> = (props) => {
	return (
		<ButtonGroup variant="contained" sx={{ mt: 1, mb: 2 }}>
			<CanvasButtonDraw tool={props.tool} setTool={props.setTool} />
			<ButtonStrokeWidth
				strokeWidth={props.strokeWidth}
				setStrokeWidth={props.setStrokeWidth}
				showStrokeWidth={props.showStrokeWidth}
				setShowStrokeWidth={props.setShowStrokeWidth}
			/>
			<ButtonStrokeColor
				strokeColor={props.strokeColor}
				setStrokeColor={props.setStrokeColor}
			/>
			<ButtonFillColor
				fillColor={props.fillColor}
				setFillColor={props.setFillColor}
				disabledFill={props.disabledFill}
				setDisabledFill={props.setDisabledFill}
			/>
			<ButtonUndoDelete
				elements={props.elements}
				setElements={props.setElements}
				resetAll={props.resetAll}
			/>
			{props.imageUpload && <ButtonPublish canvasToImage={props.canvasToImage} />}
		</ButtonGroup>
	);
};

export default CanvasButtonGroup;
