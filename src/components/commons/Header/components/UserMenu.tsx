import { Avatar, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

import { getDocs, getFirestore, collection, query, where, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { firebaseApp } from "../../../../services/firestore";
import { useEffect, useState } from "react";

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
    {
        id: 3,
        name: "Sair",
        redirectTo: "/",
        icon: "mingcute:exit-fill"
    }
]

interface UserSessionDataType {
    name: string;
    email: string;
    profileImage: string;
    role: string;
}

export function UserMenu() {
    const navigate = useNavigate();
    const [userSessionData, setUserSessionData] = useState({} as UserSessionDataType);
    
    useEffect(() => {
        (async () => {
            try {
                const db = getFirestore(firebaseApp);
                const storage = getStorage(firebaseApp);
                
                const currentUserDocument = query(collection(db, 'users'), where("email", "==", "erickmenezes25@hotmail.com"));
                const userSnapshot = await getDocs(currentUserDocument);

                if (userSnapshot.empty) {
                    throw new Error('Usuário não encontrado, não é possível pegar os dados.');
                }

                const userRoleDocument = doc(db, userSnapshot.docs[0].data().role.path);
                const userRoleSnapshot = await getDoc(userRoleDocument);

                if (!userRoleSnapshot.exists()) {
                    throw new Error('Cargo do usuário não encontrado, não é possível pegar os dados.');
                }

                const userProfileImageReference = ref(storage, 'profiles/erick-menezes.jpg');
                
                const userProfileImageLink = await getDownloadURL(userProfileImageReference)
                                                    .then((url) => url)
                                                    .catch((error) => {
                                                        throw new Error(error);
                                                    });

                const user = userSnapshot.docs[0].data();
                const role = userRoleSnapshot.data();

                setUserSessionData({
                    name: user.name,
                    email: user.email,
                    profileImage: userProfileImageLink ?? '',
                    role: role.name,
                })
            } catch (error) {
                console.log('Error: ', error);
            }
        })();
    }, []);

    return (
        <Menu>
            <MenuButton as="button">
                <Avatar
                    name={userSessionData.name}
                    src={userSessionData.profileImage ?? ''}
                    width={42}
                    height={42}
                />
            </MenuButton>
            <MenuList background="white" paddingTop={4}>
                <Flex
                    flexDirection="column"
                    gap={1}
                    paddingLeft={4}
                >
                    <Text
                      lineHeight={1}
                      fontWeight="bold"
                      fontSize="lg"
                      noOfLines={1}
                      title={userSessionData.name}
                    >
                        {userSessionData.name}
                    </Text>

                    <Text color="darkgray">{userSessionData.role}</Text>
                </Flex>

                <Divider orientation='horizontal' borderColor="blackAlpha.300" margin="0.5rem 0" />

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
            </MenuList>
        </Menu>
    );
}