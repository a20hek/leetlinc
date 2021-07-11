import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/auth';
import firebase from 'firebase/app';
import {
	Button,
	Input,
	FormControl,
	FormLabel,
	Stack,
	Center,
	Text,
	Container,
	Heading,
	Tag,
	Flex,
	Tooltip,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

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
		<>
			{isLoggedin ? (
				<Container centerContent>
					<Heading fontWeight='400' textAlign='center' mt='15%'>
						Welcome!
					</Heading>
					<Heading size='md' opacity='0.7' textAlign='center' mt={2}>
						It's great to have you here {':)'}
					</Heading>
					<Text fontWeight='500' opacity='0.5' textAlign='center' mt={10} mb={5}>
						One last step before you get started..
					</Text>
					<Stack>
						<FormLabel htmlFor='name' opacity='0.7'>
							Enter skills, frameworks and softwares known
						</FormLabel>
						<Flex>
							<Input
								autoFocus
								w='400px'
								placeholder='E.g. Javasript, Figma'
								type='text'
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<Tooltip
								hasArrow
								label='Add skill'
								aria-label='Add Skills'
								color='white'>
								<Button
									disabled={!input}
									onClick={addSkill}
									ml={2}
									borderRadius='100%'
									h='40px'
									w='40px'
									bg='#13DA01'
									_hover={{ bg: '#0eb500' }}>
									<AddIcon color='#ffffff' />
								</Button>
							</Tooltip>
						</Flex>
						<ul>
							{skills.map((skill) => (
								<Tag m={1} bg='#0eb500' textColor='#ffffff' opacity='0.6'>
									{skill}
								</Tag>
							))}
						</ul>
						<Center>
							<Button
								onClick={() => arrUnion(skills, user.uid)}
								w='60%'
								mt={5}
								bg='#0EB500'
								borderColor='green.300'
								variant='outline'
								textColor='#ffffff'
								_hover={{ bg: '#13DA01' }}>
								Next
							</Button>
						</Center>
					</Stack>
				</Container>
			) : null}
		</>
	);
}
