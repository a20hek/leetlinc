import {
	Button,
	Input,
	FormControl,
	FormLabel,
	useToast,
	FormErrorMessage,
	Stack,
	Divider,
	Center,
	Text,
	Container,
	Box,
	Link,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';
import GoogleIcon from '../components/GoogleIcon';
import NextLink from 'next/link';

export default function Register() {
	const [loading, setLoading] = useState(false);
	const { signUpWithEmail } = useAuth();

	const toast = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const auth = useAuth();

	const registeruser = ({ email, pass }) => {
		setLoading(true);
		signUpWithEmail(email, pass).catch((error) => {
			setLoading(false);
			toast({
				title: 'An error occurred.',
				description: error.message,
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		});
	};

	return (
		<Container w='80%' maxW='500px'>
			<Box bg='gray.100' borderRadius={20} mt='10vh'>
				<Stack
					as='form'
					onSubmit={handleSubmit((data) => registeruser(data))}
					errors={errors}
					padding={8}>
					<FormControl isInvalid={errors.email && errors.email.message}>
						<FormLabel htmlFor='email'>Email</FormLabel>

						<Input
							w='400px'
							autoFocus
							placeholder='jake@gmail.com'
							type='text'
							{...register('email', {
								required: 'this is required',
								pattern: {
									value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
									message: 'Invalid email address',
								},
							})}
							bg='#ffffff'
						/>
						<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.pass && errors.pass.message}>
						<FormLabel htmlFor='Password'>Password</FormLabel>
						<Input
							w='400px'
							type='password'
							{...register('pass', {
								required: 'this is a required',
								minLength: {
									value: 8,
									message: 'Minimum length is 8',
								},
							})}
							bg='#ffffff'
						/>
						<FormErrorMessage>{errors.pass && errors.pass.message}</FormErrorMessage>
					</FormControl>

					<Center>
						<Button
							isLoading={loading}
							type='submit'
							w='400px'
							mt={3}
							m={2}
							bg='#0EB500'
							borderColor='green.300'
							variant='outline'
							textColor='#ffffff'
							_hover={{ bg: '#13DA01' }}>
							Sign Up
						</Button>
					</Center>
					<Divider />
					<Center>
						<Button
							size='md'
							onClick={() => auth.signinWithGoogle()}
							leftIcon={<GoogleIcon />}
							w='60%'
							mt={2}
							bg='#ffffff'
							variant='outline'
							borderColor='green.300'
							_hover={{ bg: '#fafafa' }}>
							Continue With Google
						</Button>
					</Center>
					<Center>
						<NextLink href='/login'>
							<Link>
								<Text as='u' fontSize='xs' opacity='80%'>
									Already a member? Log In
								</Text>
							</Link>
						</NextLink>
					</Center>
				</Stack>
			</Box>
		</Container>
	);
}
