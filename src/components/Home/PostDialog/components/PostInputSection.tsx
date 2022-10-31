import Select from 'react-select';
import { Flex, Text, Textarea } from "@chakra-ui/react";
// import { CSSProperties } from 'react';

const optionsTest = [
    { value: 'seguranca-da-informacao', label: 'Segurança da Informação' },
    { value: 'calculoi', label: 'Cálculo I' },
    { value: 'calculoii', label: 'Cálculo II' },
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python' }
]

// const groupStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
// };

// const groupBadgeStyles: CSSProperties = {
//     backgroundColor: '#EBECF0',
//     borderRadius: '2em',
//     color: '#172B4D',
//     display: 'inline-block',
//     fontSize: 12,
//     fontWeight: 'normal',
//     lineHeight: '1',
//     minWidth: 1,
//     padding: '0.16666666666667em 0.5em',
//     textAlign: 'center',
// };

// const formatGroupLabel = (data: GroupedOption) => (
//     <div style={groupStyles}>
//         <span>{data.label}</span>
//         <span style={groupBadgeStyles}>{data.options.length}</span>
//     </div>
// );

export function PostInputSection() {
    return (
        <Flex flexDirection="column" gap={6}>
            <Textarea
                placeholder="Digite seu conteúdo aqui"
                name="post-content"
                id="post-content"
                cols={30}
                rows={10}
                padding={6}
                borderRadius={10}
                borderColor="gray.200"
                _hover={{
                    borderColor: "gray.200"
                }}
                _focus={{
                    borderColor: "gray.200",
                    boxShadow: "0 0 0 1px #C4C4C4"
                }}
                _placeholder={{
                    color: 'gray.200'
                }}
                zIndex={1}
            />

            <Flex flexDirection="column" gap={2}>
                <Text fontWeight="semibold">Publicar em:</Text>

                <Select 
                    options={optionsTest}
                    placeholder="Selecione um grupo"
                    isMulti
                />
            </Flex>
        </Flex>
    );
}