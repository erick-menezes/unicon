import { Flex, Heading, Text } from "@chakra-ui/react";

export function GroupHub() {
    return (
        <Flex flexDirection="column">
            <Heading as="h1" size="lg">
                Grupos
            </Heading>
            
            <Text>Encontre todos os grupos que possam ser de seu interesse aqui!</Text>
        </Flex>
    )
}