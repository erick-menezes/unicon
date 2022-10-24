import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { CircledButton } from "../CircledButton";
import { StyledButton } from '../StyledButton';
import { Icon } from '@iconify/react';

export type PostDataType = {
    postId: string;
    title: string;
    authorImage: string;
    authorName: string;
    postCover: string;
}

interface PostCardWithInteractionProps {
    postData: PostDataType;
}

export function PostCardWithInteraction({ postData }: PostCardWithInteractionProps) {
    const userFavoritePostsIdsStaticData = [postData.postId];
    const [postIsFavorited, setPostIsFavorited] = useState<boolean>(() => userFavoritePostsIdsStaticData.includes(postData.postId));
    const [postIsLiked, setPostIsLiked] = useState(false);

    function handleFavoritePost() {
        setPostIsFavorited((previousValue) => !previousValue);
    }

    function handleLikePost() {
        setPostIsLiked((previousValue) => !previousValue);
    }

    return (
        <Flex flexDirection="column" gap={6} width="100%">
            <Box position="relative">
                <Image 
                    src={postData.postCover} 
                    width="100%"
                    height={220}
                    objectFit="cover"
                    objectPosition="50%"
                    borderRadius={10}
                />

                <CircledButton
                    background="orange.500"
                    _hover={{
                        background: "orange.700"
                    }}
                    _active={{
                        background: "orange.700"
                    }}
                    title="Favoritar post"
                    type="button"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={handleFavoritePost}
                    icon={postIsFavorited ? "bi:bookmark-fill" : "bi:bookmark"}
                />
            </Box>

            <Flex
                flexDirection={{ base: "column", xl: "row" }}
                alignItems={{ base: "flex-start", xl: "center" }}
                gap={{ base: 8, xl: 0 }}
                justifyContent="space-between"
            >
                
                <Text
                    as={Link}
                    to={`/${postData.authorName.split(' ').map((name) => name.toLowerCase()).join('-')}/posts/${postData.postId}`}
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                        textDecoration: "underline"
                    }}
                >
                    {postData.title}
                </Text>
              
                <Text fontWeight="semibold">300 curtidas</Text>
            </Flex>

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                marginTop={2}
            >
                <Avatar
                    name={postData.authorName}
                    src={postData.authorImage}
                    width={42}
                    height={42}
                />

                <Flex flexDirection="column">
                    <Text
                        as={Link}
                        to="#"
                        fontSize="md"
                        fontWeight="bold"
                        noOfLines={1}
                        title={postData.authorName}
                        _hover={{
                            textDecoration: "underline"
                        }}
                    >
                        {postData.authorName}
                    </Text>

                    <Text fontWeight="semibold" color="gray.300" display="flex" alignItems="center" gap={1}>
                        <Icon 
                            icon="ant-design:clock-circle-filled"
                        />
                        há 2 dias
                    </Text>
                </Flex>
            </Flex>
            
            <StyledButton gap={2} onClick={handleLikePost} title="Curtir post">
                <Icon 
                    icon={!postIsLiked ? "ant-design:like-outlined" : "ant-design:like-filled"}
                    fontSize={30}
                />

                Curtir
            </StyledButton>
        </Flex>
    );
}