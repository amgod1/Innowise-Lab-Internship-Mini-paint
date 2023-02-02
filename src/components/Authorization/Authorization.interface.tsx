export default interface iAuthorization {
	upperText: string;
	buttonText: string;
	swapLink: string;
	swapText: string;
	mail: string;
	password: string;
	user: string;
	error: string;
	onMailChange: (value: string) => void;
	onPasswordChange: (value: string) => void;
	onLogInClick: (user: string) => void;
	onLogOutClick: () => void;
	onSetError: (error: string) => void;
}
