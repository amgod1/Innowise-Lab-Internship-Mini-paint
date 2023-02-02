import { FC } from 'react';
import iInputFile from './InputFile.interface';

const InputFile: FC<iInputFile> = ({
	setPublishImageError,
	setImageUpload,
}) => {
	return (
		<input
			type="file"
			accept=".png, .jpg, .jpeg"
			style={{ marginBottom: '20px' }}
			onChange={e => {
				if (e.currentTarget.files) {
					if (e.currentTarget?.files[0].size > 1000000) {
						setPublishImageError('File size is larger than 1mb!');
						e.currentTarget.value = '';
						return;
					}
					console.log(e.currentTarget?.files[0]);
					setImageUpload(e.currentTarget?.files[0]);
				}
			}}
		/>
	);
};

export default InputFile;
