import { useState, useEffect } from 'react';

import { Post } from '../../../services/database/entities/post';

import { dislikePost } from '../../../services/firestore/use-cases/posts/dislike-post';
import { unsavePost } from '../../../services/firestore/use-cases/posts/unsave-post';
import { likePost } from '../../../services/firestore/use-cases/posts/like-post';
import { savePost } from '../../../services/firestore/use-cases/posts/save-post';

import { Link } from 'react-router-dom';

import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
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
            <Flex
                position="relative"
                borderRadius={10}
                height={220}
                backgroundColor="#8E8DBE"
                alignItems="center"
                justifyContent="center"
            >
                {postData?.coverImage ? (
                    <Image
                        src={postData.coverImage}
                        width="100%"
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
                    title="Favoritar post"
                    type="button"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    onClick={handleSavePost}
                    icon={postSaveId?.length ? "bi:bookmark-fill" : "bi:bookmark"}
                />
            </Flex>

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
