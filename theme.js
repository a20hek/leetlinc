import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '500px',
	md: '700px',
	lg: '1000px',
});

const theme = extendTheme({
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
});

export { theme, breakpoints };
