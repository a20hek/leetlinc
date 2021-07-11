import { useRouter } from 'next/router';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import {
	Box,
	Text,
	Container,
	Tag,
	Spacer,
	Stack,
	Input,
	Flex,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

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
				{props.skills.map((skill) => (
					<Tag mr={1} mb={1} bg='#0eb500' textColor='#ffffff' opacity='0.6'>
						{skill}
					</Tag>
				))}
			</ul>
		</Box>
	);
};

export default function SearchResult() {
	async function Search(query) {
		const upper = query.toUpperCase();
		const lower = query.toLowerCase();
		const FirstLetter = query.charAt(0).toUpperCase() + query.slice(1);

		const snapshot = await firebase
			.firestore()
			.collection('users')
			.where('skills', 'array-contains-any', [upper, lower, FirstLetter])
			.get();
		const results = [];
		snapshot.forEach((doc) => {
			results.push({ id: doc.id, ...doc.data() });
		});
		return { results };
	}

	const router = useRouter();
	const searchreq = router.query.searchResult;
	const [result, setResult] = useState([]);

	const [input, setInput] = useState(searchreq);

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			router.push({
				pathname: '/search/[searchResult]',
				query: { searchResult: input },
			});
		}
	};

	console.log(Search(searchreq));

	useEffect(() => {
		if (searchreq) {
			Search(searchreq).then(({ results }) => setResult(results));
		}
	}, [searchreq]);

	return (
		<Box bg='#f4f4f4' height='100vh'>
			<Container maxW='container.md'>
				<InputGroup size='lg'>
					<InputLeftAddon children={<Search2Icon />} bg='#fdfdfd' />
					<Input
						m='auto'
						textColor='#000000'
						variant='outline'
						placeholder='Search for keywords like ‘web developer’, ‘designer’, ‘marketers’, etc'
						colorScheme='whiteAlpha'
						bg='#fdfdfd'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
				</InputGroup>
				<Flex direction='column' mt='5%'>
					{result.length > 0 &&
						result.map((item) => (
							<Card
								name={item.name}
								skills={item.skills}
								college={item.college}
								email={item.email}
							/>
						))}
				</Flex>
			</Container>
		</Box>
	);
}
