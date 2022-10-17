import { useState } from 'react';

import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CircledButton } from "../CircledButton";
import { StyledButton } from '../StyledButton';

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

    function handleFavoritePost() {
        setPostIsFavorited((previousValue) => !previousValue);
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
                    title="Favoritar post"
                    type="button"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={handleFavoritePost}
                    icon={postIsFavorited ? "ant-design:heart-filled" : "ant-design:heart-outlined"}
                />
            </Box>

            <Flex alignItems="center" justifyContent="space-between">
                <Text fontSize="lg" fontWeight="bold">{postData.title}</Text>
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

                    <Text fontWeight="semibold" color="gray.300">
                        há 2 dias
                    </Text>
                </Flex>
            </Flex>
            
            <StyledButton>Curtir</StyledButton>
        </Flex>
    );
}