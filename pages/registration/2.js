import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/auth';
import firebase from 'firebase/app';

export default function Registration2() {
	const firestore = firebase.firestore();

	const [isLoggedin, setIsLoggedin] = useState(false);
	const { user, signout } = useAuth();

	const router = useRouter();

	const [skills, setSkills] = useState([]);
	const [input, setInput] = useState('');

	const addSkill = (e) => {
		e.preventDefault();
		setSkills([...skills, input]);
		setInput('');
	};

	function arrUnion(skills, uid) {
		return firestore
			.collection('users')
			.doc(uid)
			.update({
				skills: firebase.firestore.FieldValue.arrayUnion(...skills),
			})
			.then(router.push('/home'));
	}
	firebase.auth().onAuthStateChanged(function (user) {
		setIsLoggedin(!!user);
	});

	return (
		<div>
			{isLoggedin ? (
				<>
					<label htmlFor='name'>Enter your skills</label>
					<input
						placeholder='Javasript'
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<br />
					<button disabled={!input} onClick={addSkill}>
						Add more
					</button>
					<br />
					<button onClick={() => arrUnion(skills, user.uid)}>Next</button>
					<ul>
						{skills.map((skill) => (
							<li>{skill}</li>
						))}
					</ul>
				</>
			) : (
				<div></div>
			)}
		</div>
	);
}
