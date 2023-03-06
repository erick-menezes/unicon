import { useState, useEffect } from 'react';

import { createGroup, SelectInput } from '../../../commons/form/SelectInput';
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import { ContentEditorInput, ContentEditorInputProps } from '../../../commons/ContentEditorInput';
import { DividerHorizontal } from '../../../Divider';
import { getAllCategoriesWithGroups } from '../../../../services/firestore/use-cases/categories/get-categories-with-groups';
import { MultiValue } from 'react-select';
import { SelectOptionData } from '..';

interface PostInputSectionProps {
    contentEditor: ContentEditorInputProps;
    onChangeTitle: (title: string) => void;
    title: string;
    onChangeSelect: React.Dispatch<React.SetStateAction<MultiValue<SelectOptionData[]>>>;
    selectValue: MultiValue<SelectOptionData[]>;
}

export function PostInputSection({ contentEditor, onChangeTitle, title, onChangeSelect, selectValue }: PostInputSectionProps) {
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        buildSelectOptions();
    }, []);

    async function buildSelectOptions() {
        const { categories } = await getAllCategoriesWithGroups();

        const selectGroups = categories.map((category) => {
            const groupsSelectModel = category?.groups?.map((group) => ({ label: group.name, value: group.id }));

            return createGroup(category.name, groupsSelectModel!, onChangeSelect);
        })

        setOptions(selectGroups);
    }

    return (
        <Flex flexDirection="column" gap={6}>
            <Flex flexDirection="column" gap={2} >
                <Text as="label" htmlFor="content-groups" fontWeight="bold">Publicar em:</Text>

                <SelectInput
                    name="content-groups"
                    closeMenuOnSelect={false}
                    onChange={(option) => onChangeSelect(option)}
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

            <DividerHorizontal />

            <Box>
                <Input
                    placeholder="Título do conteúdo"
                    marginTop={2}
                    type="text"
                    id="content-title"
                    borderColor="gray.200"
                    _hover={{}}
                    _placeholder={{ color: 'gray.300' }}
                    value={title}
                    onChange={(event) => onChangeTitle(event.target.value)}
                />
            </Box>

            <Flex flexDirection="column" gap={4}>
                <ContentEditorInput
                    contentText={contentEditor.contentText}
                    onChangeContent={contentEditor.onChangeContent}
                />

                {/* <Text marginTop={8}>
                    ou
                    <Text
                        as={Link}
                        to="/post/new"
                        display="inline"
                        marginLeft={1}
                        color="cyan."
                    >
                        abra em outra guia
                    </Text>
                </Text> */}
            </Flex>
        </Flex>
    );
}
