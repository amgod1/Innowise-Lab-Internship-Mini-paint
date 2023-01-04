import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
// import PanToolRoundedIcon from '@mui/icons-material/PanToolRounded';

import CanvasButtonSample from './CanvasButtonSample';

interface Props {
	tool: string;
	setTool: (tool: string) => any;
}

const buttonDrawInfo = [
	{
		toolSample: 'pencil',
		tooltipTitle: 'Free drawing',
		icon: <ModeEditOutlineIcon />,
	},
	{
		toolSample: 'line',
		tooltipTitle: 'Line drawing',
		icon: <HorizontalRuleIcon />,
	},
	{
		toolSample: 'rectangle',
		tooltipTitle: 'Rectangle drawing',
		icon: <RectangleOutlinedIcon />,
	},
	{
		toolSample: 'circle',
		tooltipTitle: 'Circle drawing',
		icon: <FiberManualRecordOutlinedIcon />,
	},
	// {
	// 	toolSample: 'selection',
	// 	tooltipTitle: 'Move drawn elements',
	// 	icon: <PanToolRoundedIcon />,
	// },
];

const CanvasButtonDraw = (props: Props) => {
	return (
		<>
			{buttonDrawInfo.map(el => (
				<CanvasButtonSample
					key={el.toolSample}
					tool={props.tool}
					setTool={props.setTool}
					toolSample={el.toolSample}
					tooltipTitle={el.tooltipTitle}
					icon={el.icon}
				/>
			))}
		</>
	);
};

export default CanvasButtonDraw;
