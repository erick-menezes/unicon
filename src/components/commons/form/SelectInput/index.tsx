import Select, { GroupBase, MultiValue, Props } from 'react-select';

import { Flex, Tag, Text } from '@chakra-ui/react';

export const createGroup = (categoryName: string, options: any[], setValue: React.Dispatch<React.SetStateAction<MultiValue<any[]>>>) => {
    return {
        label: (() => {
            return (
                <Flex
                    justifyContent="space-between"
                >
                    <Flex gap={2} alignItems="center">
                        <Tag background="blue.500" color="white">{options.length}</Tag>
                        <Text size="sm">{categoryName}</Text>
                    </Flex>

                    <Text
                        cursor="pointer"
                        onClick={
                            () => setValue((value) => value.concat(options.filter((grpOpt) => !value.includes(grpOpt))))
                        }
                        size="sm"
                        textTransform="lowercase"
                    >
                        Selecionar tudo
                    </Text>
                </Flex>
            );
        })(),
        options: options
    };
};

export function SelectInput<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
    return (
        <Select
            {...props}
        />
    )
}