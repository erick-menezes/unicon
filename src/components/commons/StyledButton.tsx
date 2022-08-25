import { ReactNode } from "react";

import { Button, ButtonProps } from "@chakra-ui/react";

interface StyledButtonProps extends ButtonProps {
    children: ReactNode;
}

export function StyledButton({ children, ...rest }: StyledButtonProps) {
    return (
        <Button
            background="app-primary"
            color="white"
            fontWeight="500"
            width="100%"
            padding={7}
            maxWidth={350}
            boxShadow="10px 10px 20px rgba(0, 0, 0, 0.12)"
            borderRadius={"xl"}
            _hover={{
                background: "app-primary",
                filter: "opacity(0.9)"
            }}
            _active={{
                background: "app-primary-dark",
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}