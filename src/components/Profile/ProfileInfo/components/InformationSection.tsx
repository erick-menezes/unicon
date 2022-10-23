import { Flex } from "@chakra-ui/react";
import { HeadingStyled } from "../../../commons/HeadingStyled";
import { ProfileInfoField } from "./ProfileInfoField";

export function InformationSection() {
    return (
        <>
            <HeadingStyled
                as="h2" 
                marginTop={10} 
                marginBottom={10} 
                size="md"
            >
                Informações
            </HeadingStyled>

            <Flex  
                alignItems="flex-start"
                flexDirection={{ base: 'column', xl: 'row' }}
                gap={{ base: 10, xl: 16 }}
            >
                <ProfileInfoField fieldName="Nome" fieldData="Lucas Xavier" isFieldEditable />
                <ProfileInfoField fieldName="E-mail" fieldData="201602772843@alunos.estacio.br" isFieldEditable />
                <ProfileInfoField fieldName="Senha" fieldData="*********" isFieldEditable />
            </Flex>
        </>
    );
}