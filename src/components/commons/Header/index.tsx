import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/auth";

import { Link } from "react-router-dom";

import { UserMenu } from "./components/UserMenu";
import { NotificationMenu } from "./components/NotificationMenu";
import { Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

import { Icon } from "@iconify/react";


export function Header() {
    const { userData } = useAuth();
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibleBackground);

        return () => window.removeEventListener('scroll', toggleVisibleBackground);
    }, []);

    function toggleVisibleBackground() {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 100) {
            setIsBackgroundVisible(true);
        } else if (scrolled <= 300) {
            setIsBackgroundVisible(false);
        }
    };

    return (
        <Flex
            padding="0.5rem 2rem"
            position="sticky"
            top="0"
            zIndex={100}
            background="white"
            border="1px solid"
            borderColor={isBackgroundVisible ? "blackAlpha.300" : "white"}
            alignItems="center"
        >
            <Flex gap={8}>
                <Link to="/home">
                    <Icon icon="emojione:letter-u" fontSize={52} />
                </Link>

                <InputGroup maxWidth={300}>
                    <Input
                        background="gray.100"
                        _placeholder={{
                            color:'darkgray'
                        }}
                        borderRadius={30}
                        height={12}
                        paddingInline={6}
                        placeholder="Pesquisar no Unicon"
                    />
                    <InputRightElement
                        height="100%"
                        paddingRight={4}
                        paddingBottom={1}
                        children={
                            <Icon
                                icon="eva:search-fill"
                                fontSize={28}
                                color="darkgray"
                            />
                        }
                    />
                </InputGroup>
            </Flex>

            <Flex margin="auto" gap={4}>
                <Text
                    as={Link}
                    to="/home"
                    fontWeight="bold"
                    _hover={{
                        textDecoration: 'underline'
                    }}
                >
                    Início
                </Text>

                {(userData?.disciplines.length ?? 0) > 0 && (
                    <Text
                        as={Link}
                        to="/dashboard"
                        fontWeight="bold"
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        Dashboard
                    </Text>
                )}

                <Text
                    as={Link}
                    to="/groups"
                    fontWeight="bold"
                    _hover={{
                        textDecoration: 'underline'
                    }}
                >
                    Grupos
                </Text>
            </Flex>

            <Flex alignItems="center" gap={5}>
                <NotificationMenu />
                <UserMenu />
            </Flex>
        </Flex>
    );
}
