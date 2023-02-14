import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Icon } from '@iconify/react';
import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/commons/StyledButton";
import { LandingContainer } from "../../components/Landing/LandingContainer";

export function Landing() {
    const navigate = useNavigate();

    function goToRegisterPage() {
        navigate('/register');
    }

    return (
        <LandingContainer>
            <Flex
                width={{ base: "100%", xl: "50%" }}
                flexDirection="column"
                alignItems="center"
                gap={4}
            >
                <Icon icon="emojione:letter-u" fontSize={80} color="red" />
                <Heading as="h1" fontWeight="600">Olá!</Heading>
                <Text>Bem-vindo ao Unicon, a melhor forma de se conectar a notícias.</Text>

                <StyledButton onClick={goToRegisterPage}>
                    Sou novo
                </StyledButton>

                <Text
                    as={Link}
                    to="/login"
                    color="cyan.500"
                    fontWeight="600"
                    _hover={{
                        textDecoration: "underline",
                    }}
                >
                    Já tenho conta
                </Text>

                <Flex gap={4} alignItems="center" color="gray.200" marginY={6}>
                    <Box borderBottom="1px solid" height={1} width="80px" />
                    ou
                    <Box borderBottom="1px solid" height={1} width="80px" />
                </Flex>

                <StyledButton
                    background="white"
                    color="gray.800"
                    border="1px solid"
                    borderColor="gray.100"
                    display="flex"
                    gap={4}
                    _hover={{
                        background: "gray.100"
                    }}
                >
                    <Icon
                        icon="logos:microsoft-icon"
                        fontSize={30}
                    />
                    Entrar com a Microsoft
                </StyledButton>
            </Flex>
        </LandingContainer>
    );
}
