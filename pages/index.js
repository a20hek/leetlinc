import React from 'react';
import NextLink from 'next/link';
import { useAuth } from '../lib/auth';
import Loginform from '../components/Loginform';
import {
	Box,
	Flex,
	Heading,
	Text,
	Input,
	Center,
	Image,
	SimpleGrid,
	useDisclosure,
	Link,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import router from 'next/router';

function LandingPage() {
	const auth = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			router.push('/login');
		}
	};
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
				backgroundImage="url('hero-img.jpg')"
				bgPosition='center'
				bgRepeat='no-repeat'
				bgSize='cover'
				borderBottomRightRadius='20px'
				borderBottomLeftRadius='20px'>
				<Box>
					<Flex>
						<Flex justifyContent='center' mt='2%' mr='3%' ml='3%'>
							<NextLink href='/#'>
								<Image src='/logo-white.svg' alt='leetlinc' />
							</NextLink>
						</Flex>
						<Flex w='100%' justifyContent='flex-end'>
							<Flex align='center'>
								<NextLink href='/' passHref>
									<Button
										mr={20}
										variant='outline'
										color='white'
										_hover={{ bg: '#222222' }}
										colorScheme='blackAlpha'
										onClick={() => router.push('/signup')}>
										Signup
									</Button>
								</NextLink>
							</Flex>
							<Flex align='center'>
								<Button
									mr={20}
									color='white'
									onClick={onOpen}
									variant='ghost'
									_hover={{ bg: '#222222' }}
									colorScheme='blackAlpha'>
									Login
								</Button>
								<Modal isOpen={isOpen} onClose={onClose}>
									<ModalOverlay />
									<ModalContent>
										<ModalHeader mt={3}>
											<Text textAlign='center' fontSize='xl' fontWeight='300'>
												Login
											</Text>
										</ModalHeader>
										<ModalCloseButton />
										<ModalBody>
											<Loginform />
										</ModalBody>
										<ModalFooter m='auto'>
											<NextLink href='/signup'>
												<Link>
													<Text as='u' fontSize='xs' opacity='80%'>
														New Here? Register
													</Text>
												</Link>
											</NextLink>
										</ModalFooter>
									</ModalContent>
								</Modal>
							</Flex>
							<Flex align='center'>
								<NextLink href='/' passHref>
									<Link mr={20} color='white'>
										Contact
									</Link>
								</NextLink>
							</Flex>
						</Flex>
					</Flex>
				</Box>
				<Center>
					<Heading
						as='h1'
						size='2xl'
						textAlign='center'
						color='#ffffff'
						width='80%'
						mb='3%'
						mt='4%'
						maxW='1100px'>
						Find students from within the Pillai Campus to work with, on cool stuff
					</Heading>
				</Center>
				/>
				<InputGroup size='lg' w='80%' maxW='720px' m='auto'>
					<InputLeftAddon children={<Search2Icon />} bg='#fdfdfd' />

					<Input
						textColor='#000000'
						variant='outline'
						placeholder='Search for keywords like ‘web developer’, ‘designer’, ‘marketers’, etc'
						colorScheme='whiteAlpha'
						size='lg'
						bg='#ffffff'
						onKeyPress={handleKeyPress}
					/>
				</InputGroup>
			</Box>
			<Flex justifyContent='center'>
				<SimpleGrid columns={2} columns={2}>
					<Flex direction='column' m='5%'>
						<Center>
							<Image src='/connect-icon.svg' alt='connect' m='2%' />
						</Center>
						<Heading as='h2' size='lg' textAlign='center' opacity='80%'>
							Connect
						</Heading>
						<Text textAlign='center' fontSize='xl' opacity='70%' mt='1%'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
					<Flex direction='column' m='5%'>
						<Center>
							<Image alt='collaborate' src='/collaborate-icon.svg' m='2%' />
						</Center>
						<Heading as='h2' size='lg' textAlign='center' opacity='80%'>
							Collaborate
						</Heading>
						<Text textAlign='center' fontSize='xl' opacity='70%' mt='1%'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
					<Flex direction='column' m='5%'>
						<Center>
							<Image src='/seekhelp-icon.svg' alt='seek-help' m='2%' />
						</Center>
						<Heading as='h2' size='lg' textAlign='center' opacity='80%'>
							Seek Help
						</Heading>
						<Text textAlign='center' fontSize='xl' opacity='70%' mt='1%'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
					<Flex direction='column' m='5%'>
						<Center>
							<Image src='/learn-icon.svg' alt='learn' m='2%' />
						</Center>
						<Heading as='h2' size='lg' textAlign='center' opacity='80%'>
							Learn from others and upskill
						</Heading>
						<Text textAlign='center' fontSize='xl' opacity='70%' mt='1%'>
							Find and connect with students who have similar interests.
						</Text>
					</Flex>
				</SimpleGrid>
			</Flex>
			<Box bg='#505050' w='100%' h='40px'>
				<Text color='white' opacity='0.7' fontWeight='100' textAlign='right' mr='3%'>
					© 2021 Abhishek Ajithkumar
				</Text>
			</Box>
		</>
	);
}
export default LandingPage;
