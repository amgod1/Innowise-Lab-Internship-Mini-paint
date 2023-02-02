import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	setImageUploadAC,
	setClientWidthAC,
	setWidthAC,
	setHeightAC,
	handleMouseDownAC,
	handleMouseUpAC,
	handleMouseMoveAC,
	setPublishImageAC,
	setPublishImageErrorAC,
} from '../../redux/Canvas/canvasActionCreators';
import Canvas from './Canvas';

const CanvasContainer: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Canvas
			user={useAppSelector(state => state.loginPage.user)}
			imageUpload={useAppSelector(state => state.canvas.imageUpload)}
			clientWidth={useAppSelector(state => state.canvas.clientWidth)}
			width={useAppSelector(state => state.canvas.width)}
			height={useAppSelector(state => state.canvas.height)}
			elements={useAppSelector(state => state.canvas.elements)}
			error={useAppSelector(state => state.canvas.error)}
			uploaded={useAppSelector(state => state.canvas.uploaded)}
			setImageUpload={(imageUpload: File) =>
				dispatch(setImageUploadAC(imageUpload))
			}
			setClientWidth={(clientWidth: number) =>
				dispatch(setClientWidthAC(clientWidth))
			}
			setWidth={(width: number) => dispatch(setWidthAC(width))}
			setHeight={(height: number) => dispatch(setHeightAC(height))}
			handleMouseDown={(clientX: number, clientY: number) =>
				dispatch(handleMouseDownAC(clientX, clientY))
			}
			handleMouseMove={(clientX: number, clientY: number) =>
				dispatch(handleMouseMoveAC(clientX, clientY))
			}
			handleMouseUp={() => dispatch(handleMouseUpAC())}
			setPublishImageError={(error: string) =>
				dispatch(setPublishImageErrorAC(error))
			}
			setPublishImage={(result: boolean) => dispatch(setPublishImageAC(result))}
		/>
	);
};
export default CanvasContainer;
