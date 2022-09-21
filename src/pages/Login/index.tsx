import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { LandingContainer } from "../../components/Landing/LandingContainer";

import '@material/react-text-field/index.scss';

import { useForm } from "react-hook-form";
import { InputText } from "../../components/commons/form/InputText";
import { StyledButton } from "../../components/commons/StyledButton";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Login() {
    const { control, handleSubmit } = useForm();
    const isMobile = useBreakpointValue({ base: true, xl: false });
    const navigate = useNavigate();

    function onSubmit(model: any) {
        navigate('/profile');
        console.log(model);
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
                    name="password"
                    label="Senha"
                />

                <StyledButton type="submit">
                    Entrar
                </StyledButton>
                
                <Text
                    as={Link}
                    to="/"
                    color="app-primary"
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