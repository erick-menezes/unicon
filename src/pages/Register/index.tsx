import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

import { LandingContainer } from "../../components/Landing/LandingContainer";

import '@material/react-text-field/index.scss';

import { useForm } from "react-hook-form";
import { InputText } from "../../components/commons/form/InputText";
import { StyledButton } from "../../components/commons/StyledButton";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export function Register() {
    const { control, handleSubmit } = useForm();
    const isMobile = useBreakpointValue({ base: true, xl: false });

    function onSubmit(model: any) {
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
                <Heading as="h1" fontSize={isMobile ? 25 : 30}>Preencha as informações para efetuar o seu cadastro</Heading>

                <InputText
                    control={control}
                    name="name"
                    label="Nome"
                />

                <InputText
                    control={control}
                    name="email"
                    label="E-mail"
                />

                <InputText
                    control={control}
                    name="password"
                    label="Senha"
                    type="password"
                />

                <StyledButton type="submit">
                    Finalizar cadastro
                </StyledButton>

                <Text
                    as={Link}
                    to="/"
                    color="blue.300"
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