import { ReactNode } from "react";

import { Button, ButtonProps } from "@chakra-ui/react";

interface StyledButtonProps extends ButtonProps {
    children: ReactNode;
}

export function StyledButton({ children, ...rest }: StyledButtonProps) {
    return (
        <Button
            background="blue.500"
            color="white"
            width="100%"
            paddingTop={7}
            paddingBottom={7}
            maxWidth={350}
            boxShadow="10px 10px 20px rgba(0, 0, 0, 0.12)"
            borderRadius={"xl"}
            _hover={{
                background: "blue.300",
                filter: "opacity(0.9)"
            }}
            _active={{
                background: "blue.300",
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}