import { useState, useEffect } from 'react';

import { Post } from '../../../services/database/entities/post';

import { dislikePost } from '../../../services/firestore/use-cases/posts/dislike-post';
import { unsavePost } from '../../../services/firestore/use-cases/posts/unsave-post';
import { likePost } from '../../../services/firestore/use-cases/posts/like-post';
import { savePost } from '../../../services/firestore/use-cases/posts/save-post';

import { Link } from 'react-router-dom';

import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { CircledButton } from "../CircledButton";
import { StyledButton } from '../StyledButton';
import { Icon } from '@iconify/react';

import moment from 'moment';

interface PostCardWithInteractionProps {
    postData: Post;
}

export function PostCardWithInteraction({ postData }: PostCardWithInteractionProps) {
    const [postLikeId, setPostLikeId] = useState<string | null>(null);
    const [postSaveId, setPostSaveId] = useState<string | null>(null);

    const [like, setLike] = useState(() => Number((postLikeId?.length ?? 0) > 0));

    const postLikes = postData.likes + like;

    useEffect(() => {
        getPostDataFromUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getPostDataFromUser() {
        setPostLikeId(postData.interactions.postLikeId);
        setPostSaveId(postData.interactions.postSaveId);
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

    async function handleLikePost() {
        try {
            if ((postLikeId?.length ?? 0) > 0) {
                await handleRemoveLike();
            } else {
                await handleAddLike();
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function handleRemoveLike() {
        if (!postLikeId) {
            return;
        }

        await dislikePost(postLikeId);

        setLike(previous => previous - 1);
        setPostLikeId('');
    }

    async function handleRemoveSave() {
        if (!postSaveId) {
            return;
        }

        await unsavePost(postSaveId);

        setPostSaveId('');
    }

    async function handleAddLike() {
        if (!postData.id) {
            return;
        }

        const { postLikeId } = await likePost(postData.id);

        setLike(previous => previous + 1);
        setPostLikeId(postLikeId);
    }

    async function handleAddSave() {
        if (!postData.id) {
            return;
        }

        const { postSaveId } = await savePost(postData.id);

        setPostSaveId(postSaveId);
    }

    return (
        <Flex flexDirection="column" gap={6} width="100%">
            <Box position="relative">
                <Image
                    src={"data:image/png;base64,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"}
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
                    onClick={handleSavePost}
                    icon={postSaveId?.length ? "bi:bookmark-fill" : "bi:bookmark"}
                />
            </Box>

            <Flex
                flexDirection={{ base: "column", xl: "row" }}
                alignItems={{ base: "flex-start", xl: "center" }}
                gap={8}
                justifyContent="space-between"
            >

                <Text
                    as={Link}
                    to={`/${postData?.author?.name?.split(' ')?.map((name) => name.toLowerCase())?.join('-')}/posts/${postData.id}`}
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                        textDecoration: "underline"
                    }}
                    flexShrink={1}
                >
                    {postData.postTitle}
                </Text>

                <Flex
                    gap={4}
                    flexShrink={0}
                >
                    <Flex alignItems="center" gap={2}>
                        <Icon
                            icon="ant-design:like-filled"
                            fontSize={20}
                        />

                        <Text
                            fontWeight="semibold"
                        >
                            {postLikes === 1 ? `${postLikes} curtida` : `${postLikes} curtidas`}
                        </Text>
                    </Flex>

                    <Flex alignItems="center" gap={2}>
                        <Icon
                            icon="carbon:view-filled"
                            fontSize={20}
                        />
                        <Text
                            fontWeight="semibold"
                        >
                            {postData.views === 1 ? `${postData.views} visualização` : `${postData.views} visualizações`}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex>
                <Text size="lg">{postData.postPreview}</Text>
            </Flex>

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                marginTop={2}
            >
                <Avatar
                    name={postData?.author?.name}
                    src={''}
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
                        title={postData?.author?.name}
                        _hover={{
                            textDecoration: "underline"
                        }}
                    >
                        {postData?.author?.name ?? ''}
                    </Text>

                    <Text fontWeight="semibold" color="gray.300" display="flex" alignItems="center" gap={1}>
                        <Icon
                            icon="ant-design:clock-circle-filled"
                        />
                        há {moment(postData.createdAt).fromNow(true)}
                    </Text>
                </Flex>
            </Flex>

            <StyledButton gap={2} onClick={handleLikePost} title="Curtir post">
                <Icon
                    icon={!Boolean(postLikeId?.length) ? "ant-design:like-outlined" : "ant-design:like-filled"}
                    fontSize={30}
                />
                Curtir
            </StyledButton>
        </Flex>
    );
}
