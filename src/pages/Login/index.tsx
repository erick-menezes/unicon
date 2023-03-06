import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useBreakpoint } from "../../contexts/breakpoint";
import { useAuth } from "../../contexts/auth";

import { Link } from "react-router-dom";

import { LandingContainer } from "../../components/Landing/LandingContainer";
import { InputText } from "../../components/commons/form/InputText";
import { StyledButton } from "../../components/commons/StyledButton";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import '@material/react-text-field/index.scss';

export function Login() {
    const { control, handleSubmit } = useForm();
    const { logInWithEmailAndPassword, error } = useAuth();
    const { isMobile } = useBreakpoint();
    const navigate = useNavigate();

    function onSubmit(model: any) {
        logInWithEmailAndPassword(model.email, model.password);

        if (!error.message) {
            navigate('/home');
        }
    }

    return (
        <LandingContainer>
            <Flex
                as="form"
                flexDirection="column"
                rowGap={8}
                alignItems="center"
                justifyContent="center"
                width="100%"
                maxWidth={500}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading as="h1" fontSize={isMobile ? 25 : 30}>Insira suas informações para realizar o login</Heading>

                <InputText
                    control={control}
                    name="email"
                    label="E-mail"
                />

                <InputText
                    control={control}
                    type="password"
                    name="password"
                    label="Senha"
                />

                <StyledButton type="submit">
                    Entrar
                </StyledButton>

                <Text
                    as={Link}
                    to="/"
                    color="cyan.300"
                    fontWeight="600"
                    _hover={{
                        textDecoration: "underline",
                    }}
                    display="flex"
                    alignItems="center"
                    columnGap={1}
                >
                    <Icon icon="eva:arrow-back-outline" fontSize={20} />
                    Voltar
                </Text>
            </Flex>
        </LandingContainer>
    );
}
