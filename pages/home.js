import { useAuth } from '../lib/auth';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { useRouter } from 'next/router';

export async function docRef() {
	firebase
		.firestore()
		.collection('users')
		.doc(uid)
		.onSnapshot(
			function (doc) {
				let data = doc.data;
				return {
					college: data.college,
					pname: data.name,
					skills: data.skills,
				};
			}.then(console.log(college, pname, skills))
		);
}

export default function Home() {
	const { user, signout } = useAuth();
	const router = useRouter();
	const [isLoggedin, setIsLoggedin] = useState(false);

	const [input, setInput] = useState('');

	firebase.auth().onAuthStateChanged(function (user) {
		setIsLoggedin(!!user);
	});

	return (
		<div>
			{isLoggedin ? (
				<div>
					<p>{user?.name}</p>
					<button onClick={() => signout()}>Log Out</button>
					<h1>Connect. Collaborate. Learn. Seek Help.</h1>
					<input
						type='text'
						placeholder='Search'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						onClick={() =>
							router.push({
								pathname: '/search/[searchResult]',
								query: { searchResult: input },
							})
						}>
						go
					</button>
				</div>
			) : null}
		</div>
	);
}
