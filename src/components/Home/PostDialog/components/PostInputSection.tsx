import { useState, useEffect } from 'react';

import { createGroup, SelectInput } from '../../../commons/form/SelectInput';
import { Flex, Text } from "@chakra-ui/react";
import { InputWithBlueLabel } from '../../../commons/form/InputWithBlueLabel';
import { MultiValue } from 'react-select';
import { Icon } from '@iconify/react';

const exactCategory = [
    {
      label: "Cálculo I",
      value: "calculoi"
    },
    {
      label: "Cálculo II",
      value: "calculoii"
    },
    {
        label: "Cálculo III",
        value: "calculoiii"
      }
];

const technologyCategory = [
    {
      label: "Java",
      value: "java"
    },
    {
      label: "Python",
      value: "python"
    }
];

interface SelectOptionData {
    label: string;
    value: string;
}

// interface SelectOptionDataFormatted {
//     label: JSX.Element;
//     options: SelectOptionData[];
// }

export function PostInputSection() {
    const [selectValue, setSelectValue] = useState<MultiValue<SelectOptionData[]>>([]);
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        buildSelectOptions();
    }, []);

    function buildSelectOptions() {
        setOptions([
            createGroup('Exatas', exactCategory, setSelectValue),
            createGroup('Tecnologia', technologyCategory, setSelectValue)
        ]);
    }

    return (
        <Flex flexDirection="column" gap={6}>
            <InputWithBlueLabel
                labelTitle="Publicação rápida"
                placeholder="Digite seu conteúdo aqui"
                name="post-content"
                id="post-content"
                cols={30}
                rows={10}
                padding={6}
                borderRadius={10}
                borderWidth={2}
                borderColor="blue.500"
                _hover={{
                    borderColor: "blue.800"
                }}
                _focus={{
                    borderColor: "blue.500",
                    boxShadow: "0 0 0 1px #C4C4C4"
                }}
                _placeholder={{
                    color: 'gray.200'
                }}
                zIndex={1}
            />

            <Flex flexDirection="column" gap={2}>
                <Text fontWeight="semibold">Publicar em:</Text>

                <SelectInput
                    closeMenuOnSelect={false}
                    onChange={(option) => {
                        console.log(option);
                        return setSelectValue(option);
                    }}
                    options={options}
                    value={selectValue}
                    placeholder="Selecione um grupo"
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
                            <Text >Nenhum grupo foi encontrado.</Text>
                        </Flex>
                    )}
                    isMulti
                />
            </Flex>
        </Flex>
    );
}