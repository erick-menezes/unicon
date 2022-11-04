import { Divider, DividerProps } from "@chakra-ui/react";

interface DividerHorizontalProps extends DividerProps {}

export function DividerHorizontal({...rest}: DividerHorizontalProps) {
    return (
        <Divider borderColor="gray.200" height="10px" {...rest} />
    );
}