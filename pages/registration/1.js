import React, { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase';
import { useEffect } from 'react';
import { useAuth } from '../../lib/auth';
import { useForm } from 'react-hook-form';

export default function Registration1() {
	const firestore = firebase.firestore();

	const [isLoggedin, setIsLoggedin] = useState(false);
	const { user, signout } = useAuth();
	const uid = user.uid;
	const router = useRouter();

	const { register, handleSubmit } = useForm();

	firebase.auth().onAuthStateChanged(function (user) {
		setIsLoggedin(!!user);
	});

	function updatestuff(data, uid) {
		return firestore
			.collection('users')
			.doc(uid)
			.set(data, { merge: true })
			.then(() => router.push('/registration/2'));
	}

	return (
		<>
			{isLoggedin ? (
				<div>
					<form onSubmit={handleSubmit((data) => updatestuff(data, uid))}>
						<label htmlFor='name'>Enter your name</label>
						<input placeholder='Vishy Anand' type='text' {...register('name')} />
						<br />
						<label htmlFor='college'>Enter your college's name</label>
						<input
							placeholder='Zugzwang College'
							type='text'
							{...register('college')}
						/>
						<br />
						<button type='submit'> Next</button>
					</form>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}
