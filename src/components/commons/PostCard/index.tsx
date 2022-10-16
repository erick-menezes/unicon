import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

export function PostCard() {
    return (
        <Flex flexDirection="column">
            <Box width="100%" height={48} position="relative">
                <Image 
                    src="/image.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="50%"
                    borderRadius="2rem 2rem 0 0"
                />

                {/* <Image src="/image.png" alt="Post image" width="100%" height="100%" o/> */}
            </Box>
            

            <Text>Novos Fundamentos de engenharia aplicados em site e aplicativos</Text>

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                marginTop={6}
                padding="0 1.5rem 0 1.5rem"
            >
                <Avatar
                    name="Rodrigo dias"
                    src="/testimage.png"
                    width={42}
                    height={42}
                />

                <Text
                    // as={Link}
                    // to="#"
                    fontSize="md"
                    fontWeight="medium"
                    noOfLines={1}
                    title="Rodrigo Dias"
                    _hover={{
                        textDecoration: "underline"
                    }}
                >
                    Rodrigo Dias
                </Text>
                
            </Flex>
        </Flex>
    );
}