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

const apiKeyFB: string = process.env.REACT_APP_APIKEY!;
const authDomainFB: string = process.env.REACT_APP_AUTH_DOMAIN!;
const projectIdFB: string = process.env.REACT_APP_PROJECT_ID!;
const storageBucketFB: string = process.env.REACT_APP_STORAGE_BUCKET!;
const messagingSenderIdFB: string = process.env.REACT_APP_MESSAGING_SENDER_ID!;
const appIdFB: string = process.env.REACT_APP_APP_ID!;
const measurementIdFB: string = process.env.REACT_APP_MEASUREMENT_ID!;

const firebaseConfig: IFC = {
	apiKey: apiKeyFB,
	authDomain: authDomainFB,
	projectId: projectIdFB,
	storageBucket: storageBucketFB,
	messagingSenderId: messagingSenderIdFB,
	appId: appIdFB,
	measurementId: measurementIdFB,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
