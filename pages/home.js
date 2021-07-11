import { useAuth } from '../lib/auth';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import { useRouter } from 'next/router';
import {
	Box,
	Input,
	Button,
	Heading,
	Image,
	Text,
	Flex,
	Tag,
	Container,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import Head from 'next/head';

export default function Home() {
	const { user, signout, uid } = useAuth();
	const router = useRouter();
	const [input, setInput] = useState('');

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			router.push({
				pathname: '/search/[searchResult]',
				query: { searchResult: input },
			});
		}
	};

	const [isLoggedin, setIsLoggedin] = useState(false);
	firebase.auth().onAuthStateChanged(function (user) {
		setIsLoggedin(!!user);
	});

	const [result, setResult] = useState([]);

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

	console.log(result);

	return (
		//HELP
		//NAVBAR
		//LOGO
		<div>
			{isLoggedin ? (
				<>
					<Head>
						<title>Leetlinc </title>
					</Head>
					<Box bg='#f4f4f4' h='100vh' pr='5%' pl='5%'>
						<Image src='/logo-black.svg' alt='leetlinc' p={5} />{' '}
						<Flex>
							<Flex direction='column' w='80vw'>
								<Heading textAlign='center' mt='5%' mb='5%' as='h1' size='2xl'>
									Connect. Collaborate. Learn. Seek Help.
								</Heading>
								<InputGroup size='lg' w='80%' m='auto'>
									<InputLeftAddon bg='#fdfdfd'>
										<Search2Icon />
									</InputLeftAddon>
									<Input
										textColor='#000000'
										variant='outline'
										placeholder='Search for keywords like ‘web developer’, ‘designer’, ‘marketers’, etc'
										colorScheme='whiteAlpha'
										size='lg'
										bg='#ffffff'
										value={input}
										onChange={(e) => setInput(e.target.value)}
										onKeyPress={handleKeyPress}
									/>
								</InputGroup>
							</Flex>
							<Flex>
								<Flex direction='column' align='center'>
									<div>
										{result.length > 0 && (
											<Container bg='#ffffff' borderRadius='5px' mt='1%'>
												<Text fontSize='xl' fontWeight='500' pt={2}>
													{result[0].name}
												</Text>
												<Text fontSize='md' fontWeight='300' pt={1} pb={2}>
													{result[0].college}
												</Text>
												<ul>
													{result[0].skills.map((skill) => (
														<Tag
															key={skill}
															mr={1}
															mb={1}
															bg='#0eb500'
															textColor='#ffffff'
															opacity='0.6'>
															{skill}
														</Tag>
													))}
												</ul>
												<Button
													colorScheme='red'
													onClick={() => signout()}
													size='xs'
													m={4}
													variant='ghost'>
													Log Out
												</Button>
											</Container>
										)}
									</div>
								</Flex>
							</Flex>
						</Flex>
					</Box>
				</>
			) : null}
		</div>
	);
}
