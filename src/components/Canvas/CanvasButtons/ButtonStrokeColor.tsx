import { IconButton, Tooltip, Input } from '@mui/material';

interface Props {
	strokeColor: string;
	setStrokeColor: (strokeColor: string) => any;
}

const ButtonStrokeColor = (props: Props) => {
	return (
		<Tooltip title="Set line (border) color" placement="top" arrow>
			<IconButton>
				<Input
					sx={{ width: '22px' }}
					id="strokeColor"
					type="color"
					value={props.strokeColor}
					onChange={e => props.setStrokeColor(e.target.value)}
				/>
			</IconButton>
		</Tooltip>
	);
};

export default ButtonStrokeColor;
