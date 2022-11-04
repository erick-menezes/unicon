import { extendTheme } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
    config: {
        initialColorMode: 'light',
    },
    components: {
        Text: {
            baseStyle: {},
            sizes: {
                sm: {
                    fontSize: "14px",
                },
                md: {
                    fontSize: "16px",
                },
                lg: {
                    fontSize: "18px",
                },
            },
            variants: {},
            defaultProps: {
                size: "md",
                colorScheme: "gray.800"
            }
        },
        Heading: {
            baseStyle: {},
            sizes: {
                sm: {
                    fontSize: "26px",
                },
                md: {
                    fontSize: "34px",
                },
                lg: {
                    fontSize: "42px",
                },
            },
            variants: {},
            defaultProps: {
                size: "md",
                colorScheme: "gray.800"
            }
        }
    },
    colors: {
        "red": "#FF0000",
        
        "yellow": {
            800: "#FEDB41",
            900: "#F4C701",
        },
        
        "blue": {
            100: "#D0F6FE",
            300: "#88E9FF",
            500: "#63E1FD",
            600: "#48CBE8",
            800: "#51B8CF",
        },
        "gray": {
            100: "#EFEFEF",
            200: "#C4C4C4",
            300: "#999999",
            800: "#333333",
        },
        "orange": {
            500: "#FF8360",
            700: "#FF6F47",
        }
    },
    fonts: {
        heading: "Quicksand, sans-serif",
        body: "Quicksand, sans-serif",
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            'html, body': {
                width: '100vw',
                height: '100vh',
            },
            'body': {
                bg: 'white',
                color: 'gray.800',
                overflowX: 'hidden',
            },
            '#root': {
                height: '100vh',
                width: '100vw',
                position: 'relative',
            },
            '::-webkit-scrollbar': {
                width: '12px',
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '10px',
            },
            '::-webkit-scrollbar-thumb': {
                background: 'blue.500',
                borderRadius: '10px',
            },
            '::-webkit-scrollbar-thumb:hover': {
                background: 'blue.800',
            },
        }),
    },
})