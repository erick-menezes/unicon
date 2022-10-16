import { useState } from 'react';

import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CircledButton } from "../CircledButton";

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
        <Flex flexDirection="column" gap={6}>
            <Box position="relative">
                <Image 
                    src={postData.postCover} 
                    width="100%"
                    height={220}
                    objectFit="cover"
                    objectPosition="50%"
                    borderRadius={14}
                />

                <CircledButton
                    type="button"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={handleFavoritePost}
                    icon={postIsFavorited ? "ant-design:heart-filled" : "ant-design:heart-outlined"}
                />
            </Box>

            <Text fontSize="lg" fontWeight="bold">{postData.title}</Text>

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

                <Text
                    as={Link}
                    to="#"
                    fontSize="md"
                    fontWeight="medium"
                    noOfLines={1}
                    title={postData.authorName}
                    _hover={{
                        textDecoration: "underline"
                    }}
                >
                    {postData.authorName} 
                    <Text as="b" marginLeft={1}>
                        • há 2 dias
                    </Text>
                </Text>
            </Flex>
        </Flex>
    );
}