import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

export function LoginPage() {
    return (
        <Flex justifyContent="center" width="100%" height="100%">
            {/* <Flex
              alignSelf="center"
              boxShadow="10px 10px 20px rgba(0, 0, 0, 0.12)"
              borderRadius={20}
              width={800}
            > */}
                <Flex
                  width="50%"
                  flexDirection="column"
                  rowGap={5}
                  alignItems="center"
                  justifyContent="center"
                  padding={10}
                >
                    <Icon icon="emojione:letter-u" fontSize={80} color="red" />
                    <Heading as="h1" fontWeight="600">Bem-vindo!</Heading>
                    <Text>Bem-vindo ao Unicon, a melhor forma de se conectar a notícias.</Text>

                    <Button
                        background="app-primary"
                        color="white"
                        fontWeight="500"
                        width="100%"
                        maxWidth={350}
                        boxShadow="10px 10px 20px rgba(0, 0, 0, 0.12)"
                        borderRadius={"xl"}
                        _hover={{
                            background: "app-primary",
                            filter: "opacity(0.9)"
                        }}
                    >
                        Sou novo
                    </Button>

                    <Text
                      as={Link}
                      to="/"
                      color="app-primary"
                      fontWeight="600"
                      _hover={{
                        textDecoration: "underline",
                      }}
                    >
                        Já tenho conta
                    </Text>
                </Flex>

                <Flex background="app-primary" width="50%">
                    <Image objectFit="cover" maxWidth="100%" height="auto" src={process.env.PUBLIC_URL + 'people.webp'} alt="Test" />
                </Flex>
            </Flex>
        // </Flex>
    );
}