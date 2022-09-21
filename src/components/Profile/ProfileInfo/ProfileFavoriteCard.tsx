import { useState } from 'react';

import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

import { CircledButton } from '../../commons/CircledButton';
import { Link } from 'react-router-dom';

interface FavoriteCardData {
    postId: string;
    postCover: string;
    authorName: string;
    authorImage: string;
    title: string;
    isFavorited: boolean;
}

interface ProfileFavoriteCardProps {
    data: FavoriteCardData;
}

export function ProfileFavoriteCard({ data }: ProfileFavoriteCardProps) {
    const [postIsFavorited, setPostIsFavorited] = useState<boolean>(() => data?.isFavorited && false);

    function handleUnfavoritePost() {
        setPostIsFavorited((previousValue) => !previousValue);
    }

    return (
        <Box
            maxWidth="428px"
            background="gray.100"
            borderRadius="2rem"
            paddingBottom={4}
        >
            <Box width="100%" height={48} position="relative">
                <Image 
                    src={data.postCover}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="50%"
                    borderRadius="2rem 2rem 0 0"
                />
                
                <CircledButton
                    type="button"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={handleUnfavoritePost}
                    icon={postIsFavorited ? "ant-design:heart-outlined" : "ant-design:heart-filled"}
                />
            </Box>

            <Text
                as={Link}
                to="#"
                fontSize="xl"
                fontWeight="bold"
                noOfLines={1}
                title={data.title}
                marginTop={4}
                padding="0 1.5rem 0 1.5rem"
                _hover={{
                    textDecoration: "underline"
                }}
            >
                {data.title}
            </Text>

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                marginTop={6}
                padding="0 1.5rem 0 1.5rem"
            >
                <Avatar
                    name={data.authorName}
                    src={data.authorImage}
                    width={42}
                    height={42}
                />

                <Text
                    as={Link}
                    to="#"
                    fontSize="md"
                    fontWeight="medium"
                    noOfLines={1}
                    title={data.authorName}
                    _hover={{
                        textDecoration: "underline"
                    }}
                >
                    {data.authorName}
                </Text>
                
            </Flex>
        </Box>
    );
}