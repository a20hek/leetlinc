import { db } from './firebaseAdmin';

export async function getUserdata(uid) {
	const snapshot = await db.collection('users').where('uid', '==', uid).get();
	const userdata = [];

	snapshot.forEach((doc) => {
		userdata.push({ id: doc.id, ...doc.data() });
	});
	return { userdata };
}
