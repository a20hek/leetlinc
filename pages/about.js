import React from 'react';
import { Container, Heading, Text, Flex, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function contact() {
	return (
		<Flex direction='column'>
			<Flex>
				<NextLink href='/home'>
					<Image p={5} src='/logo-black.svg' alt='leetlinc' cursor='pointer' />
				</NextLink>
			</Flex>
			<Container size='xl'>
				<Heading textAlign='center' fontWeight='500'>
					ABOUT
				</Heading>
				<br />
				<br />
				<Text fontSize='xl'>
					Leetlinc was made so that we, students could collaborate, form communities and
					learn from each other. Due to this pandemic, it has been really difficult for us
					to connect with like-minded people. Even if there weren’t a pandemic, it would
					have been seemingly impossible to keep track of over a thousand fellow students,
					their interests and their skills. Now, to have all that information within your
					fingertips, makes college life a bit easier.
				</Text>
				<br />
				<Text fontSize='xl'>
					If you think you can contribute to this project by helping us build more
					features or by bringing in more students, we’d be more than happy to have you in
					our team. Contact us at abhishek@leetlinc.com or call +91 8104053253 for more
					details.
				</Text>
				<br />
				<br />
				<Image src='/all-icons.svg' alt='leetlinc' m='auto' />
			</Container>
		</Flex>
	);
}
