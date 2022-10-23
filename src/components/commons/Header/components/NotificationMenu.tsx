import { Avatar, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { favoritePostsStaticData } from "../../../Profile/ProfileInfo/mocks";

export function NotificationMenu() {
    const navigate = useNavigate();
    
    return (
        <Menu>
            <MenuButton as="button">
                <Icon 
                    icon="mingcute:notification-fill"
                    fontSize={28}
                />
            </MenuButton>
            <MenuList background="white" width={360} maxWidth={360} paddingTop={4}>
                <Text paddingLeft={6} fontSize="2xl" fontWeight="bold" marginBottom={4}>Notificações</Text>
                
                {favoritePostsStaticData.map((post) => (
                    <MenuItem
                        key={post.postId}
                        onClick={
                            () => navigate(`/${post.authorName.split(' ').map((name) => name.toLowerCase()).join('-')}/posts/${post.postId}`)
                        } 
                        paddingLeft={4} 
                        _hover={{ background: 'gray.100' }}
                    >
                        <Flex gap={3}>
                            <Avatar
                                name={post.authorName}
                                src={post.authorImage}
                                width={54}
                                height={54}
                            />

                            <Text noOfLines={3}>
                                <Text as="span" fontWeight="bold">{post.authorName} </Text>
                                fez uma publicação com o título 
                                <Text as="span" fontWeight="bold"> {post.title}</Text>
                            </Text>
                        </Flex>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}