import { Icon } from "@iconify/react";
import { Avatar, Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function ProfileHeader() {
    const isMobile = useBreakpointValue({ base: true, xl: false });
    const showChangeCoverText = useBreakpointValue({ base: false, 'md': true })
    
    return (
        <Box width="100%" position="relative" zIndex={0} as="header">
            <Box
                borderBottomRightRadius={600}
                overflow="hidden"
                height={isMobile ? 150 : 200}
            >
                <Image
                    objectFit="cover"
                    maxWidth="100%"
                    height="auto"
                    src={`${process.env.PUBLIC_URL}image.png`}
                    alt="Profile cover"
                    zIndex={0}
                />
            </Box>

            <Flex
                as="button"
                position="absolute"
                bottom={showChangeCoverText ? 4 : 0}
                right={showChangeCoverText ? 4 : 10}
                background="app-primary"
                boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.25)"
                color="white"
                padding="5px 10px 5px 10px"
                borderRadius={200}
                columnGap={2}
            >
                <Icon icon="bxs:image-add" fontSize={showChangeCoverText ? 25 : 30} />
                {showChangeCoverText && <Text>Alterar capa</Text>}
            </Flex>

            {
                !isMobile && (
                    <Flex
                        position="absolute"
                        bottom={-32}
                        left={10}
                        alignItems="center"
                        justifyContent="center"
                        columnGap={5}
                    >

                        <Avatar
                            name='Dan Abrahmov'
                            src='https://bit.ly/dan-abramov'
                            width={180}
                            height={180}
                        />

                        <Flex
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            rowGap={2}
                            marginTop={12}
                        >
                            <Heading size="lg">Dan Abrahmov</Heading>
                            <Text size="lg">Membro desde Janeiro 2022</Text>
                        </Flex>
                    </Flex>
                )
            }
        </Box>
    );
}