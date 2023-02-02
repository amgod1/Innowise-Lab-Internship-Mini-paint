import { IconButton, Tooltip, Input, Checkbox } from '@mui/material';

interface Props {
	fillColor: string;
	disabledFill: boolean;
	setFillColor: (fillColor: string) => void;
	setDisabledFill: (disabledFill: boolean) => void;
}

const ButtonFillColor = (props: Props) => {
	return (
		<>
			<Tooltip title="Fill elements" placement="top" arrow>
				<Checkbox
					checked={!props.disabledFill}
					onChange={e => {
						props.setDisabledFill(!e.target.checked);
					}}
				/>
			</Tooltip>
			<Tooltip title="Set fill color" placement="top" arrow>
				{!props.disabledFill ? (
					<IconButton>
						<Input
							sx={{ width: '22px' }}
							id="fillColor"
							type="color"
							value={props.fillColor}
							onChange={e => {
								props.setFillColor(e.target.value);
							}}
						/>
					</IconButton>
				) : (
					<></>
				)}
			</Tooltip>
		</>
	);
};

export default ButtonFillColor;
