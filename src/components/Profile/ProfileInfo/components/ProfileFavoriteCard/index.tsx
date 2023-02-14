import { useState } from 'react';

import { Avatar, Box, BoxProps, Flex, Image, Text } from "@chakra-ui/react";

import { CircledButton } from '../../../../commons/CircledButton';
import { Link } from 'react-router-dom';
import { Post } from '../../../../../services/database/entities/post';
import { Icon } from '@iconify/react';

interface ProfileFavoriteCardProps extends BoxProps {
    data: Post;
}

export function ProfileFavoriteCard({ data, ...rest }: ProfileFavoriteCardProps) {
    const userFavoritePostsIdsStaticData = [data.id];
    const [postIsFavorited, setPostIsFavorited] = useState<boolean>(() => userFavoritePostsIdsStaticData.includes(data.id));

    function handleFavoritePost() {
        setPostIsFavorited((previousValue) => !previousValue);
    }

    return (
        <Box
            maxWidth="428px"
            background="gray.100"
            borderRadius="2rem"
            paddingBottom={4}
            {...rest}
        >
            <Flex
                width="100%"
                height={48}
                position="relative"
                borderRadius={4}
                backgroundColor="#8E8DBE"
                alignItems="center"
                justifyContent="center"
            >
                {data?.coverImage ? (
                    <Image
                        src={data.coverImage}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        objectPosition="50%"
                    />
                ) : (
                    <Icon
                        icon="material-symbols:image"
                        color="#FFFFFF"
                        fontSize={100}
                    />
                )}

                <CircledButton
                    background="orange.500"
                    _hover={{
                        background: "orange.700"
                    }}
                    _active={{
                        background: "orange.700"
                    }}
                    type="button"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={handleFavoritePost}
                    icon={postIsFavorited ? "bi:bookmark-fill" : "bi:bookmark"}
                />
            </Flex>

            <Text
                as={Link}
                to={`/${data.author?.name.split(' ').map((name) => name.toLowerCase()).join('-')}/posts/${data.id}`}
                fontSize="lg"
                fontWeight="bold"
                noOfLines={1}
                title={data.postTitle}
                marginTop={4}
                padding="0 1.5rem 0 1.5rem"
                _hover={{
                    textDecoration: "underline"
                }}
            >
                {data.postTitle}
            </Text>

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                marginTop={6}
                padding="0 1.5rem 0 1.5rem"
            >
                <Avatar
                    name={data?.author?.name}
                    src={''}
                    width={42}
                    height={42}
                />

                <Text
                    as={Link}
                    to="#"
                    fontSize="md"
                    fontWeight="medium"
                    noOfLines={1}
                    title={data?.author?.name}
                    _hover={{
                        textDecoration: "underline"
                    }}
                >
                    {data?.author?.name}
                </Text>

            </Flex>
        </Box>
    );
}
