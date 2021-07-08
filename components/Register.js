import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';

export default function Register() {
	const [loading, setLoading] = useState(false);

	const { signUpWithEmail } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registeruser = ({ email, pass }) => {
		setLoading(true);
		signUpWithEmail(email, pass).catch((error) => {
			setLoading(false);
			console.log(error.message);
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit((data) => registeruser(data))}>
				<label htmlFor='email'>Email</label>
				<input
					placeholder='bluebill1049@hotmail.com'
					type='text'
					{...register('email', {
						required: 'this is required',
						pattern: {
							value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: 'Invalid email address',
						},
					})}
				/>
				<br />
				{errors.email && errors.email.message}
				<br />

				<label htmlFor='Password'>Password</label>
				<input
					type='password'
					{...register('pass', {
						required: 'this is a required',
						minLength: {
							value: 8,
							message: 'Minimum length is 8',
						},
					})}
				/>
				<br />
				{errors.pass && errors.pass.message}
				<br />

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
