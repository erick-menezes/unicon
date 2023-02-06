import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth";

import { DividerHorizontal } from "../../../Divider";
import { Avatar, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const userMenuOptions = [
    {
        id: 1,
        name: "Perfil",
        redirectTo: "/profile",
        icon: "bxs:user",
    },
    {
        id: 2,
        name: "Configurações",
        redirectTo: "/settings?section=account",
        icon: "eva:settings-2-fill"
    },
]

export function UserMenu() {
    const navigate = useNavigate();
    const { userData, logout } = useAuth();

    return (
        <Menu>
            <MenuButton as="button">
                <Avatar
                    name={userData?.name}
                    src={`${process.env.PUBLIC_URL}assets/img/me.jpg`}
                    width={42}
                    height={42}
                />
            </MenuButton>
            <MenuList background="white" paddingTop={4}>
                <Flex
                    flexDirection="column"
                    gap={1}
                    paddingLeft={4}
                    paddingRight={4}
                >
                    <Text
                      lineHeight={1}
                      fontWeight="bold"
                      fontSize="lg"
                      noOfLines={1}
                      title={userData?.name}
                    >
                        {userData?.name}
                    </Text>

                    <Text color="darkgray">{userData?.email}</Text>
                </Flex>

                <DividerHorizontal margin="0.5rem 0" />

                {userMenuOptions.map((option) => (
                    <MenuItem
                        key={option.id}
                        onClick={
                            () => navigate(option.redirectTo)
                        }
                        paddingLeft={4}
                        _hover={{ background: 'gray.100' }}
                    >
                        <Flex gap={3}>
                            <Icon icon={option.icon} fontSize={26} />

                            <Text>{option.name}</Text>
                        </Flex>
                    </MenuItem>
                ))}

                <MenuItem
                    onClick={logout}
                    paddingLeft={4}
                    _hover={{ background: 'gray.100' }}
                >
                    <Flex gap={3}>
                        <Icon icon="mingcute:exit-fill" fontSize={26} />

                        <Text>Sair</Text>
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
