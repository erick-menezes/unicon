import { Icon } from "@iconify/react";
import { Avatar, Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useBreakpoint } from "../../../contexts/breakpoint";

export function ProfileHeader() {
    const { isMobile } = useBreakpoint();
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
                    src={`${process.env.PUBLIC_URL}assets/img/image.png`}
                    alt="Profile cover"
                    zIndex={0}
                />
            </Box>

            <Flex
                as="button"
                position="absolute"
                bottom={showChangeCoverText ? 4 : 0}
                right={showChangeCoverText ? 4 : 10}
                background="cyan.300"
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
                            src={`${process.env.PUBLIC_URL}assets/img/me.jpg`}
                            width={180}
                            height={180}
                        />

                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            rowGap={1}
                            marginTop={12}
                        >
                            <Heading as="h2" size="md">Erick Menezes</Heading>
                            <Text size="md">Membro desde Janeiro 2022</Text>
                        </Flex>
                    </Flex>
                )
            }
        </Box>
    );
}
