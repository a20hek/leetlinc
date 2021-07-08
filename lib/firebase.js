import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyBS_JGc6HzmSVg76ox6DNCmZmYrUN1vEKA',
		authDomain: 'leetlinc.firebaseapp.com',
		projectId: 'leetlinc',
	});
}

export default firebase;
