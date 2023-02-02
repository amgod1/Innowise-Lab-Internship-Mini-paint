import LineWeightIcon from '@mui/icons-material/LineWeight';
import { IconButton, Tooltip } from '@mui/material';

interface Props {
	strokeWidth: number;
	showStrokeWidth: boolean;
	setStrokeWidth: (strokeWidth: number) => void;
	setShowStrokeWidth: (showStrokeWidth: boolean) => void;
}

const ButtonStrokeWidth = (props: Props) => {
	return (
		<Tooltip
			title={`Change line weight. Current weight is: ${props.strokeWidth}`}
			placement="top"
			arrow
		>
			<IconButton
				color="secondary"
				onClick={() => {
					props.setShowStrokeWidth(true);
				}}
			>
				{!props.showStrokeWidth ? (
					<LineWeightIcon />
				) : (
					<input
						aria-orientation="vertical"
						type="range"
						min="1"
						max="10"
						value={props.strokeWidth}
						onChange={e => {
							props.setStrokeWidth(Number(e.target.value));
						}}
						onMouseUp={() => {
							props.setShowStrokeWidth(false);
						}}
					/>
				)}
			</IconButton>
		</Tooltip>
	);
};

export default ButtonStrokeWidth;
