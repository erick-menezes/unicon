import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
    colors: {
        "app-primary": "#63E1FD",
    },
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            'html, body': {
                width: '100vw',
                height: '100vh',
            },
            'body': {
                fontFamily: 'body',
                bg: 'white',
                color: '#49484F',
            },
            '#root': {
                height: '100%',
                width: '100%',
            }
        }),
    },
})