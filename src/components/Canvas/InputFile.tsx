interface Props {
	setPublishImageError: (error: string) => void;
	setImageUpload: (imageUpload: any) => void;
}

const InputFile = (props: Props) => {
	return (
		<input
			type="file"
			accept=".png, .jpg, .jpeg"
			style={{ marginBottom: '20px' }}
			onChange={e => {
				if (e.currentTarget.files) {
					if (e.currentTarget?.files[0].size > 1000000) {
						props.setPublishImageError('File size is larger than 1mb!');
						e.currentTarget.value = '';
						return;
					}
					props.setImageUpload(e.currentTarget?.files[0]);
				}
			}}
		/>
	);
};

export default InputFile;
