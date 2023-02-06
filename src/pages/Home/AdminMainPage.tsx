import { useRef } from "react";

import { StyledButton } from "../../components/commons/StyledButton";
import { PostDialog } from "../../components/Home/PostDialog";
import { Flex, useDisclosure } from "@chakra-ui/react";

import { Icon } from "@iconify/react";
import { DividerHorizontal } from "../../components/Divider";
import { useAuth } from "../../contexts/auth";

export function AdminMainPage() {
    const { userData } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);

    const firstName = userData?.name.split(' ')[0];

    return (
        <Flex alignItems="center" justifyContent="center">
            <Flex
                as="main"
                flexDirection="column"
                width={{
                    base: "90%",
                    xl: "50%"
                }}
                paddingTop={10}
                paddingBottom={10}
            >
                <StyledButton
                    alignSelf="center"
                    maxWidth="700px"
                    display="flex"
                    justifyContent="start"
                    gap={4}
                    paddingLeft={8}
                    borderRadius={30}
                    marginTop={6}
                    background="yellow.800"
                    _hover={{
                        background: "yellow.900"
                    }}
                    _active={{
                        background: "yellow.900"
                    }}
                    onClick={onOpen}
                >
                    <Icon
                        icon="bi:chat-dots-fill"
                        fontSize={28}
                    />

                    Qual conteúdo deseja publicar hoje, {firstName}?
                </StyledButton>

                <DividerHorizontal marginTop={4} />

                {/* <Heading as="h2">Tu é bom.</Heading>
                <Text size="lg">Tu é bom.</Text> */}
            </Flex>

            <PostDialog onClose={onClose} isOpen={isOpen} cancelRef={cancelRef} />
        </Flex>
    );
}
