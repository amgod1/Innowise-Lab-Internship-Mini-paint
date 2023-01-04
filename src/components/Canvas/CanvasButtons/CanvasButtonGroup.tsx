import { ButtonGroup } from '@mui/material';
import CanvasButtonDraw from './CanvasButtonDraw';
import ButtonStrokeWidth from './ButtonStrokeWidth';
import ButtonStrokeColor from './ButtonStrokeColor';
import ButtonFillColor from './ButtonFillColor';
import ButtonUndoDelete from './ButtonUndoDelete';
import ButtonPublish from './ButtonPublish';

interface Props {
	imageUpload: any | null;
	tool: string;
	elements: any[];
	strokeWidth: number;
	showStrokeWidth: boolean;
	strokeColor: string;
	fillColor: string;
	disabledFill: boolean;
	setTool: (tool: string) => any;
	setElements: (elements: any[]) => any;
	setStrokeWidth: (strokeWidth: number) => any;
	setShowStrokeWidth: (showStrokeWidth: boolean) => any;
	setStrokeColor: (strokeColor: string) => any;
	setFillColor: (fillColor: string) => any;
	setDisabledFill: (disabledFill: boolean) => any;
	resetAll: () => void;
	canvasToImage: () => void;
}

const CanvasButtonGroup = (props: Props) => {
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
