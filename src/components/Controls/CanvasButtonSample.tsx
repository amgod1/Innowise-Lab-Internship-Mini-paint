import { IconButton, Tooltip } from '@mui/material';

interface Props {
	tool: string;
	toolSample: string;
	tooltipTitle: string;
	icon: any;
	setTool: (tool: string) => void;
}

const CanvasButtonSample = (props: Props) => {
	return (
		<Tooltip title={props.tooltipTitle} placement="top" arrow>
			<IconButton
				color={props.tool === props.toolSample ? 'success' : 'primary'}
				onClick={() => {
					props.setTool(props.toolSample);
				}}
			>
				{props.icon}
			</IconButton>
		</Tooltip>
	);
};

export default CanvasButtonSample;
