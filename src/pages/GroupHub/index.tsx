import { Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { StyledButton } from "../../components/commons/StyledButton";
import { DividerHorizontal } from "../../components/Divider";

export function GroupHub() {
    return (
        <Flex flexDirection="column">
            <Flex justifyContent="space-between" padding="2rem 6rem" alignItems="end">
                <Flex flexDirection="column" gap={4}>
                    <Heading as="h1" size="lg">
                        Grupos
                    </Heading>
                    
                    <Text>Encontre todos os grupos que possam ser de seu interesse aqui!</Text>
                </Flex>
                <StyledButton gap={2} maxWidth="225px" paddingTop={0} paddingBottom={0}>
                     <Icon 
                        icon="ant-design:usergroup-add-outlined"
                        fontSize={32}
                     />
                    Criar grupo
                </StyledButton>
            </Flex>

            <DividerHorizontal />
        </Flex>
    )
}