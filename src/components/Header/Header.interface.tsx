export default interface iHeader {
	user: string;
	darkMode: boolean;
	onLogOutClick: () => void;
	onSetError: (error: string) => any;
	setDarkMode: (darkMode: boolean) => void;
}
