import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Controller, useForm } from "react-hook-form";

import { CourseDataType } from "./types";

import { getAllCourses } from "./data";

import { Link, useNavigate } from "react-router-dom";

import { LandingContainer } from "../../components/Landing/LandingContainer";
import { InputText } from "../../components/commons/form/InputText";
import { StyledButton } from "../../components/commons/StyledButton";
import { SelectInput } from "../../components/commons/form/SelectInput";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import '@material/react-text-field/index.scss';
import { useBreakpoint } from "../../contexts/breakpoint";

export function Register() {
    const { signUpWithEmailAndPassword } = useAuth();
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { isMobile } = useBreakpoint(); 

    const [courseOptions, setCourseOptions] = useState<CourseDataType[]>([]);

    useEffect(() => {
        getAllCoursesData();
    }, []);

    async function getAllCoursesData() {
        const allCourses = await getAllCourses();

        setCourseOptions(allCourses);
    }

    function onSubmit(model: any) {
        try {
            signUpWithEmailAndPassword(model);

            navigate('/home');
        } catch (error) {
            console.log(error);
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
                
                <Controller 
                    control={control}
                    name="courseId"
                    render={({ 
                        field: { onChange, name }
                    }) => (
                        <SelectInput
                            styles={{ container: (rest) => ({ ...rest, width: '100%' }) }}
                            options={courseOptions.map(course => ({ label: course.name, value: course.id }))}
                            placeholder="Selecione o curso que está cursando"
                            onChange={(data) => onChange(data?.value)}
                            name={name}
                            noOptionsMessage={() => (
                                <Flex
                                    color="gray.200"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexDirection="column"
                                    paddingTop={4}
                                    paddingBottom={4}
                                    gap={2}
                                >
                                    <Icon icon="material-symbols:search-off" fontSize={52} />
                                    <Text >Nenhum curso foi encontrado.</Text>
                                </Flex>
                            )}
                        />
                    )}
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