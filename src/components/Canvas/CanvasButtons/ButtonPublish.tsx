import { IconButton, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
	canvasToImage: () => void;
}

const ButtonPublish = (props: Props) => {
	return (
		<Tooltip title="Save and publish" placement="top" arrow>
			<IconButton color="success" onClick={props.canvasToImage}>
				<CheckCircleIcon />
			</IconButton>
		</Tooltip>
	);
};

export default ButtonPublish;
