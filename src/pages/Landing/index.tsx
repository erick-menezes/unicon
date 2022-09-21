import { Heading, Text } from "@chakra-ui/react";

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
            <Icon icon="emojione:letter-u" fontSize={80} color="red" />
                <Heading as="h1" fontWeight="600">Olá!</Heading>
                <Text>Bem-vindo ao Unicon, a melhor forma de se conectar a notícias.</Text>

                <StyledButton onClick={goToRegisterPage}>
                    Sou novo
                </StyledButton>

                <Text
                    as={Link}
                    to="/login"
                    color="app-primary"
                    fontWeight="600"
                    _hover={{
                        textDecoration: "underline",
                    }}
                >
                    Já tenho conta
                </Text>
        </LandingContainer>
    );
}