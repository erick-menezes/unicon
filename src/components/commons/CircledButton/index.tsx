import { Button, ButtonProps } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import './styles.scss';

interface CircledButtonProps extends ButtonProps {
    icon: string;
}

export function CircledButton({ icon, ...rest }: CircledButtonProps) {
    return (
        <Button
            background="blue.500"
            borderRadius="100%"
            width="55px"
            height="55px"
            _hover={{
                background: "blue.600",
            }}
            _active={{
                background: "blue.600"
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