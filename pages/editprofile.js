import { useAuth } from '../lib/auth';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { useRouter } from 'next/router';
import {
	Button,
	Input,
	FormLabel,
	Stack,
	Center,
	Container,
	Heading,
	Tag,
	Flex,
	Tooltip,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Head from 'next/head';

export default function Editprofile() {
	const { user, signout, uid } = useAuth();
	const [result, setResult] = useState([]);
	const router = useRouter();

	const [skills, setSkills] = useState([]);
	const [inputskill, setInputskill] = useState('');
	const addSkill = (e) => {
		e.preventDefault();
		setSkills([...skills, inputskill]);
		setInputskill('');
	};

	const [interests, setInterests] = useState([]);
	const [inputinterest, setInputinterest] = useState('');
	const addInterest = (e) => {
		e.preventDefault();
		setInterests([...interests, inputinterest]);
		setInputinterest('');
	};

	function arrUnion(skills, interests, uid) {
		return firebase
			.firestore()
			.collection('users')
			.doc(uid)
			.update({
				skills: firebase.firestore.FieldValue.arrayUnion(...skills),
				interests: firebase.firestore.FieldValue.arrayUnion(...interests),
			})
			.then(router.push('/home'));
	}

	async function Userdata(uid) {
		const snapshot = await firebase
			.firestore()
			.collection('users')
			.where('uid', '==', uid)
			.get();
		const results = [];
		snapshot.forEach((doc) => {
			results.push({ id: doc.id, ...doc.data() });
		});
		return { results };
	}

	useEffect(() => {
		if (uid) {
			Userdata(uid).then(({ results }) => setResult(results));
		}
	}, [uid]);

	return (
		<>
			<Head>
				<title>Edit Profile | Leetlinc </title>
			</Head>
			<Container centerContent>
				<br />
				<Heading fontWeight='500' size='lg'>
					Add skills/interests
				</Heading>
				<br />
				<br />
				<Stack>
					<FormLabel htmlFor='name' opacity='0.7'>
						Enter all the things that interests you
					</FormLabel>
					<Flex>
						<Input
							autoFocus
							w={['300px', '400px', '400px']}
							placeholder='E.g. AI, Crypto, Anime, Reading etc'
							type='text'
							value={inputinterest}
							onChange={(e) => setInputinterest(e.target.value)}
						/>
						<Tooltip
							hasArrow
							label='Add interests'
							aria-label='Add Interests'
							color='white'>
							<Button
								disabled={!inputinterest}
								onClick={addInterest}
								ml={2}
								borderRadius='100%'
								h='40px'
								w='40px'
								bg='#F265FF'
								_hover={{ bg: '#DE44EC' }}>
								<AddIcon color='#ffffff' />
							</Button>
						</Tooltip>
					</Flex>
					<ul>
						{interests.map((interest) => (
							<Tag
								key={interest}
								m={1}
								bg='#F265FF'
								textColor='#ffffff'
								opacity='0.7'>
								{interest}
							</Tag>
						))}
					</ul>
					<br />
					<FormLabel htmlFor='name' opacity='0.7'>
						Enter skills, frameworks and softwares known
					</FormLabel>
					<Flex>
						<Input
							w={['300px', '400px', '400px']}
							placeholder='E.g. Javasript, Figma'
							type='text'
							value={inputskill}
							onChange={(e) => setInputskill(e.target.value)}
						/>
						<Tooltip hasArrow label='Add skill' aria-label='Add Skills' color='white'>
							<Button
								disabled={!inputskill}
								onClick={addSkill}
								ml={2}
								borderRadius='100%'
								h='40px'
								w='40px'
								bg='#13DA01'
								_hover={{ bg: '#0EB500' }}>
								<AddIcon color='#ffffff' />
							</Button>
						</Tooltip>
					</Flex>
					<ul>
						{skills.map((skill) => (
							<Tag key={skill} m={1} bg='#13DA01' textColor='#ffffff' opacity='0.7'>
								{skill}
							</Tag>
						))}
					</ul>

					<Center>
						<Button
							onClick={() => arrUnion(skills, interests, user.uid)}
							w='60%'
							mt={5}
							bg='#0EB500'
							borderColor='green.300'
							variant='outline'
							textColor='#ffffff'
							_hover={{ bg: '#13DA01' }}
							disabled={inputskill || inputinterest}>
							Update
						</Button>
					</Center>
					<Center>
						<Button
							mt={2}
							opacity='0.8'
							variant='link'
							onClick={() => router.push('/home')}>
							Skip
						</Button>
					</Center>
				</Stack>
			</Container>
		</>
	);
}
