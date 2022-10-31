import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { UserMenu } from "./components/UserMenu";
import { NotificationMenu } from "./components/NotificationMenu";
import { Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

import { Icon } from "@iconify/react";


export function Header() {
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
            justifyContent="space-between"
            alignItems="center"
        >
            <Link to="/home">
                <Icon icon="emojione:letter-u" fontSize={52} />
            </Link>

            <InputGroup maxWidth={400}>
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
                    top="50%"
                    transform="translateY(-50%)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingRight={4}
                    children={
                        <Icon 
                            icon="eva:search-fill" 
                            fontSize={28} 
                            color="darkgray" 
                        />
                    } 
                />
            </InputGroup>
            
            <Flex alignItems="center" gap={5}>
                <Text as={Link} to="/groups" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>Grupos</Text>
                <Text as={Link} to="/categories" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>Categorias</Text>
                <NotificationMenu />
                <UserMenu />
            </Flex>
        </Flex>
    );
}