import { Flex, Heading, Text } from "@chakra-ui/react";

export function CategoryHub() {
    return (
        <Flex flexDirection="column">
            <Heading as="h1" size="lg">
                Categorias
            </Heading>
            
            <Text>Encontre todos as categorias que possam ser de seu interesse aqui!</Text>
        </Flex>
    );
}