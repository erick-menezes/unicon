import { useState, useEffect } from 'react';

import { Avatar, Box, BoxProps, Flex, Image, Text } from "@chakra-ui/react";

import { CircledButton } from '../../../../commons/CircledButton';
import { Link } from 'react-router-dom';
import { Post } from '../../../../../services/database/entities/post';
import { Icon } from '@iconify/react';
import { unsavePost } from '../../../../../services/firestore/use-cases/posts/unsave-post';
import { savePost } from '../../../../../services/firestore/use-cases/posts/save-post';

interface ProfileFavoriteCardProps extends BoxProps {
    data: Post;
}

export function ProfileFavoriteCard({ data, ...rest }: ProfileFavoriteCardProps) {
    const [postSaveId, setPostSaveId] = useState<string | null>(null);

    useEffect(() => {
        getPostDataFromUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getPostDataFromUser() {
        setPostSaveId(data.interactions.postSaveId);
    }

    async function handleSavePost() {
        try {
            if ((postSaveId?.length ?? 0) > 0) {
                await handleRemoveSave();
            } else {
                await handleAddSave();
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function handleRemoveSave() {
        if (!postSaveId) {
            return;
        }

        await unsavePost(postSaveId);

        setPostSaveId('');
    }

    async function handleAddSave() {
        if (!data.id) {
            return;
        }

        const { postSaveId } = await savePost(data.id);

        setPostSaveId(postSaveId);
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
                    onClick={handleSavePost}
                    icon={postSaveId?.length ? "bi:bookmark-fill" : "bi:bookmark"}
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
