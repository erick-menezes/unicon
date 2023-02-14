import { Button, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface ProfileInfoFieldProps {
    fieldName: string;
    fieldData: string;
    isFieldEditable?: boolean;
}

export function ProfileInfoField({ fieldName, fieldData, isFieldEditable }: ProfileInfoFieldProps) {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Flex flexDirection="column" rowGap={1} marginRight={10}>
                <Text color="gray.200">
                    {fieldName}
                </Text>
                <Text size="lg">
                    {fieldData}
                </Text>
            </Flex>

            {isFieldEditable && (
                <Button
                    background="cyan.500"
                    borderRadius="100%"
                    padding={2}
                    color="white"
                    transition="background .3s"
                    _hover={{
                        background: 'cyan.800'
                    }}
                    _active={{
                        background: "cyan.800",
                    }}
                >
                    <Icon icon="ci:edit" fontSize={20} />
                </Button>
            )}
        </Flex>
    );
}
