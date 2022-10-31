import { useRef } from "react";

import { StyledButton } from "../../components/commons/StyledButton";
import { PostDialog } from "../../components/Home/PostDialog";
import { Divider, Flex, useDisclosure } from "@chakra-ui/react";

import { Icon } from "@iconify/react";

export function AdminMainPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);

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

                    Qual conteúdo deseja publicar hoje, Erick?
                </StyledButton>

                <Divider marginTop={4} borderColor="gray.200" height="10px" />
            </Flex>

            <PostDialog onClose={onClose} isOpen={isOpen} cancelRef={cancelRef} />
        </Flex>
    );
}