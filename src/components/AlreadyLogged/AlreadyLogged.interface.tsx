export default interface iAlreadyLogged {
	user: string;
	onSetError: (error: string) => void;
	onLogOutClick: () => void;
}
