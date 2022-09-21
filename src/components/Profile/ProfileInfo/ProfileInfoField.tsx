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
                <Text color="app-lightgray">
                    {fieldName}
                </Text>
                <Text>
                    {fieldData}
                </Text>
            </Flex>

            {isFieldEditable && (
                <Button
                    background="app-primary"
                    borderRadius="100%"
                    padding={2}
                    color="white"
                    transition="background .3s"
                    _hover={{
                        background: 'app-primary-dark'
                    }}
                    _active={{
                        background: "app-primary-dark",
                    }}
                >
                    <Icon icon="ci:edit" fontSize={20} />
                </Button>
            )}
        </Flex>
    );
}

ProfileInfoField.defaultProps = {
    isFieldEditable: true,
}