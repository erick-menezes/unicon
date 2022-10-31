import { Box, Heading, Textarea, TextareaProps } from "@chakra-ui/react";

interface InputWithBlueLabelProps extends TextareaProps {
    labelTitle: string;
}

export function InputWithBlueLabel({ labelTitle, ...rest }: InputWithBlueLabelProps) {
    return (
        <>
            <Box
                background="blue.500"
                marginLeft={2}
                padding="0.5rem 2rem 0.5rem 2rem"
                width="fit-content"
                marginBottom={0.25}
                zIndex={2}
                position="absolute"
                top="-45px"
            >
                <Heading size="sm" fontWeight="semibold" color="white">{labelTitle}</Heading>
            </Box>

            <Textarea
                {...rest}
            />
        </>
    );
}