import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

interface IFC {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

const firebaseConfig: IFC = {
	apiKey: process.env.REACT_APP_APIKEY!,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN!,
	projectId: process.env.REACT_APP_PROJECT_ID!,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET!,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID!,
	appId: process.env.REACT_APP_APP_ID!,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID!,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
