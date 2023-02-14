import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Notification } from '../../../../services/database/entities/notification';
import { getUserNotifications } from '../../../../services/firestore/use-cases/notifications/get-user-notifications';

import { Icon } from "@iconify/react";
import { Avatar, Circle, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function NotificationMenu() {
    const navigate = useNavigate();

    const [notifications, setNotifications] = useState<Notification[] | null>([]);

    useEffect(() => {
        onAuthStateChanged(getAuth(), () => {
            getNotifications();
        })
    }, []);

    async function getNotifications() {
        const { notifications } = await getUserNotifications();

        setNotifications(notifications);
    }

    return (
        <Menu>
            <MenuButton as="button" position="relative">
                <Icon
                    icon="mingcute:notification-fill"
                    fontSize={28}
                />

                <Circle
                    background="red"
                    size={4}
                    position="absolute"
                    bottom={4}
                />
            </MenuButton>
            <MenuList background="white" width={360} maxWidth={360} paddingTop={4}>
                <Text paddingLeft={6} fontSize="2xl" fontWeight="bold" marginBottom={4}>Notificações</Text>

                {notifications && notifications.map((notification) => (
                    <MenuItem
                        key={notification.postId}
                        onClick={
                            () => navigate(`/${notification.groupId}/posts/${notification.postId}`)
                        }
                        paddingLeft={4}
                        _hover={{ background: 'gray.100' }}
                    >
                        <Flex gap={3}>
                            <Avatar
                                name={notification.post.author?.name}
                                src={notification.post.author?.profileUrl ?? undefined}
                                width={54}
                                height={54}
                            />

                            <Flex flexDirection="column" gap={4}>
                                <Text dangerouslySetInnerHTML={{ __html: notification.content }} noOfLines={3} />
                            </Flex>
                        </Flex>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
