import { StyledButton } from "../../components/commons/StyledButton";
import { DividerHorizontal } from "../../components/Divider";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export function CategoryHub() {
    return (
        <Flex flexDirection="column">
            <Flex justifyContent="space-between" padding="2rem 6rem" alignItems="end">
                <Flex flexDirection="column" gap={4}>
                    <Heading as="h1" size="lg">
                        Categorias
                    </Heading>
                    
                    <Text>Encontre todos as categorias que possam ser de seu interesse aqui!</Text>
                </Flex>
                <StyledButton gap={2} maxWidth="225px" paddingTop={0} paddingBottom={0}>
                     <Icon 
                        icon="carbon:category-new"
                        fontSize={28}
                     />

                    Criar categoria
                </StyledButton>
            </Flex>

            <DividerHorizontal />
        </Flex>
    );
}