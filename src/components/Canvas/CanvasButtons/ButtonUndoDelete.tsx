import { IconButton, Tooltip } from '@mui/material';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

interface Props {
	elements: any[];
	setElements: (elements: any[]) => any;
	resetAll: () => void;
}

const ButtonUndoDelete = (props: Props) => {
	return (
		<>
			<Tooltip title="Undo last action" placement="top" arrow>
				<IconButton
					onClick={() => {
						if (props.elements.length >= 1) {
							props.setElements(props.elements.slice(0, -1));
						}
					}}
					color="error"
				>
					<UndoRoundedIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title="Clear field (forever)" placement="top" arrow>
				<IconButton onClick={props.resetAll} color="error">
					<DeleteForeverRoundedIcon />
				</IconButton>
			</Tooltip>
		</>
	);
};

export default ButtonUndoDelete;
