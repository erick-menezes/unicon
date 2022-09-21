import { Button, ButtonProps } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import './styles.scss';

interface CircledButtonProps extends ButtonProps {
    icon: string;
}

export function CircledButton({ icon, ...rest }: CircledButtonProps) {
    return (
        <Button
            background="app-primary"
            borderRadius="100%"
            width="55px"
            height="55px"
            _hover={{
                background: "app-primary-dark",
            }}
            _active={{
                background: "app-primary-dark"
            }}
            {...rest}
        >
            <Icon 
                icon={icon}
                color="#FFFFFF"
                fontSize={32}
            />
        </Button>
    )
}