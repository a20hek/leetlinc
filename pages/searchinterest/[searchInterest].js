import { useRouter } from 'next/router';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import {
	Box,
	Text,
	Container,
	Tag,
	Input,
	Flex,
	InputGroup,
	InputLeftAddon,
	Image,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import Head from 'next/head';
import NextLink from 'next/link';

const Card = (props) => {
	return (
		<Box bg='#ffffff' m={2} borderRadius='5px' height='120px' p={2}>
			<Text fontSize='xl' fontWeight='500' opacity='0.9'>
				{props.name}
			</Text>
			<Text opacity='0.8'>{props.email}</Text>
			<Text fontSize='sm' fontWeight='300' opacity='0.7'>
				{props.college}
			</Text>
			<ul>
				{props.interests.map((interest) => (
					<Tag
						key={interest}
						mr={1}
						mb={1}
						bg='#F265FF'
						textColor='#ffffff'
						opacity='0.7'>
						{interest}
					</Tag>
				))}
			</ul>
		</Box>
	);
};

export default function SearchInterest() {
	async function Search(query) {
		const upper = query.toUpperCase();
		const lower = query.toLowerCase();
		const firstLetter = query.charAt(0).toUpperCase() + query.slice(1);

		const snapshot = await firebase
			.firestore()
			.collection('users')
			.where('interests', 'array-contains-any', [upper, lower, firstLetter])
			.get();
		const results = [];
		snapshot.forEach((doc) => {
			results.push({ id: doc.id, ...doc.data() });
		});
		return { results };
	}

	const [isLoggedin, setIsLoggedin] = useState(false);
	firebase.auth().onAuthStateChanged(function (user) {
		setIsLoggedin(!!user);
	});

	const router = useRouter();
	const searchreq = router.query.searchInterest;
	const [result, setResult] = useState([]);

	const [input, setInput] = useState(searchreq);

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			router.push({
				pathname: '/searchinterest/[searchInterest]',
				query: { searchInterest: input },
			});
		}
	};

	useEffect(() => {
		if (searchreq) {
			Search(searchreq).then(({ results }) => setResult(results));
		}
	}, [searchreq]);

	return (
		<>
			{isLoggedin ? (
				<>
					<Head>
						<title>{searchreq} - Search | Leetlinc</title>
					</Head>
					<Box height='auto' bg='#000000'>
						<Flex>
							<NextLink href='/home'>
								<Image
									src='/logo-white.svg'
									alt='leetlinc'
									h='48px'
									m={[2, 4, 4]}
									cursor='pointer'
								/>
							</NextLink>
							<InputGroup size='lg' p={[2, 4, 4]}>
								<InputLeftAddon>
									<Search2Icon />
								</InputLeftAddon>
								<Input
									m='auto'
									textColor='#000000'
									variant='outline'
									placeholder='Search for interests'
									colorScheme='whiteAlpha'
									bg='#fdfdfd'
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyPress={handleKeyPress}
								/>
							</InputGroup>
						</Flex>
					</Box>
					<Box bg='#f4f4f4' height='100vh'>
						<Container maxW='container.md'>
							<Flex direction='column'>
								{result.length > 0 &&
									result.map((item) => (
										<Card
											key={item.name}
											name={item.name}
											interests={item.interests}
											college={item.college}
											email={item.email}
										/>
									))}
							</Flex>
							{result.length == 0 && (
								<Text
									m='10%'
									textAlign='center'
									fontWeight='500'
									fontSize='xl'
									opacity='0.7'>
									Oops, unfortunately we couldn’t find any results for &apos;
									{searchreq}&apos;
								</Text>
							)}
						</Container>
					</Box>
				</>
			) : null}
		</>
	);
}
