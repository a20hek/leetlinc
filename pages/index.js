import React from 'react';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useAuth } from '../lib/auth';
import Login from '../components/Login';
import Register from '../components/Register';
import {
	Box,
	Flex,
	Heading,
	Text,
	Input,
	InputGroup,
	InputLeftElement,
	Center,
	Image,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function Home() {
	const auth = useAuth();
	return (
		<>
			{/* <script
				dangerouslySetInnerHTML={{
					__html: `
              if (document.cookie && document.cookie.includes('leetlinc-auth')) {
                window.location.href = "/home"
              }
            `,
				}}
			/> */}
			<Box
				height='60vh'
				backgroundImage="url('leetlinc-home.jpg')"
				bgPosition='center'
				bgRepeat='no-repeat'
				bgSize='cover'
				borderBottomRightRadius='20px'
				borderBottomLeftRadius='20px'>
				<Navbar />
				<Center>
					<Heading as='h1' size='2xl' textAlign='center' color='#ffffff' width='80%'>
						Find students from within the Pillai Campus to work with, on cool stuff
					</Heading>
				</Center>

				<InputGroup size='lg' margin='auto'>
					<InputLeftElement
						pointerEvents='none'
						children={<Search2Icon color='gray.400' />}
					/>
					<Input
						width='80%'
						textColor='#ffffff'
						variant='filled'
						placeholder='Search for keywords like ‘web developer’, ‘designer’, ‘marketers’, etc'
						colorScheme='whiteAlpha'
						size='lg'
						color='#ffffff'
					/>
				</InputGroup>
			</Box>
			<Flex justifyContent='center'>
				<Wrap margin='5%'>
					<Flex direction='column'>
						<Center>
							<Image src='/connect-icon.svg' />
						</Center>
						<Heading as='h2' size='md' textAlign='center'>
							Connect
						</Heading>
						<Text textAlign='center'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
					<Flex direction='column'>
						<Center>
							<Image alt='connect' src='/collaborate-icon.svg' />
						</Center>
						<Heading as='h2' size='md' textAlign='center'>
							Collaborate
						</Heading>
						<Text textAlign='center'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
					<Flex direction='column'>
						<Center>
							<Image src='/seekhelp-icon.svg' />
						</Center>
						<Heading as='h2' size='md' textAlign='center'>
							Seek Help
						</Heading>
						<Text textAlign='center'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
					<Flex direction='column'>
						<Center>
							<Image src='/learn-icon.svg' />
						</Center>
						<Heading as='h2' size='md' textAlign='center'>
							Learn from others and upskill
						</Heading>
						<Text textAlign='center'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
				</Wrap>
			</Flex>
		</>
	);
}
