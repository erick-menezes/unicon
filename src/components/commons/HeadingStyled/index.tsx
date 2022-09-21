import { ReactNode } from "react";

import { Flex, Heading, HeadingProps } from "@chakra-ui/react";

interface HeadingStyledProps extends HeadingProps {
    children: ReactNode;
}

export function HeadingStyled({ children, ...rest }: HeadingStyledProps) {
    return (
        <Flex>
            <Heading {...rest} textDecoration="underline" textDecorationColor="app-yellow" textUnderlineOffset={8}>
                {children}
            </Heading>
        </Flex>
    );
}