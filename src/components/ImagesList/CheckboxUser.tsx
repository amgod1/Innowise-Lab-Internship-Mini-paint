interface Props {
	user: string;
	filteredCreators: any[];
	setFilteredCreators: (creators: any[]) => void;
}

const CheckboxUser = (props: Props) => {
	return (
		<div key={props.user}>
			<input
				type="checkbox"
				id={props.user}
				name={props.user}
				checked={!props.filteredCreators.includes(props.user)}
				onChange={() => {
					if (props.filteredCreators.includes(props.user)) {
						const newFiltered = props.filteredCreators
							.slice(0, props.filteredCreators.indexOf(props.user))
							.concat(
								props.filteredCreators.slice(
									props.filteredCreators.indexOf(props.user) + 1,
									props.filteredCreators.length
								)
							);
						props.setFilteredCreators(newFiltered);
					} else props.setFilteredCreators([...props.filteredCreators, props.user]);
				}}
			/>
			<label htmlFor={props.user} style={{ marginLeft: '10px' }}>
				{props.user}
			</label>
		</div>
	);
};

export default CheckboxUser;
