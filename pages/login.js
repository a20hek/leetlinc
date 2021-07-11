import React from 'react';
import Loginform from '../components/Loginform';
import { Box, Center, Link, Text } from '@chakra-ui/layout';
import NextLink from 'next/link';
import Head from 'next/head';

export default function Login() {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
		  if (document.cookie && document.cookie.includes('leetlinc-auth')) {
			window.location.href = "/home"
		  }
		`,
				}}
			/>
			<Head>
				<title>Login | Leetlinc</title>
			</Head>
			<Box mt={20}>
				<Center>
					<Text textAlign='center' fontSize='xl' fontWeight='300'>
						Login
					</Text>
				</Center>
				<Center>
					<Loginform />
				</Center>
				<Center>
					<NextLink href='/signup'>
						<Link m={2}>
							<Text as='u' fontSize='xs' opacity='80%'>
								New Here? Register
							</Text>
						</Link>
					</NextLink>
				</Center>
			</Box>
		</>
	);
}
