import { auth } from '../firebase.config';
import {
	createUserWithEmailAndPassword,
	UserCredential,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

export async function createUserWithConnect(
	mail: string,
	password: string,
	callbackSuccess: (user: string) => any,
	callbackError: (error: string) => any
) {
	try {
		const currentUser: UserCredential = await createUserWithEmailAndPassword(
			auth,
			mail,
			password
		);
		if (auth.currentUser) {
			localStorage.setItem(
				'user',
				currentUser?.user?.email ? currentUser?.user?.email : ''
			);
			callbackSuccess(currentUser?.user?.email ? currentUser?.user?.email : '');
		}
	} catch (error: any) {
		console.log(error.message);
		callbackError(error.message);
	}
}

export async function logInUserWithConnect(
	mail: string,
	password: string,
	callbackSuccess: (user: string) => any,
	callbackError: (error: string) => any
) {
	try {
		const currentUser: UserCredential = await signInWithEmailAndPassword(
			auth,
			mail,
			password
		);
		if (auth.currentUser) {
			localStorage.setItem(
				'user',
				currentUser?.user?.email ? currentUser?.user?.email : ''
			);
			callbackSuccess(currentUser?.user?.email ? currentUser?.user?.email : '');
		}
	} catch (error: any) {
		console.log(error.message);
		callbackError(error.message);
	}
}

export async function logOutUserWithConnect(
	callbackSuccess: () => void,
	callbackError: (error: string) => any
) {
	try {
		await signOut(auth);
		if (!auth.currentUser) {
			localStorage.removeItem('user');
			callbackSuccess();
		}
	} catch (error: any) {
		console.log(error.message);
		callbackError(error.message);
	}
}
