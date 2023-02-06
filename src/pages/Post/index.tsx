import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { viewPost } from "../../services/firestore/use-cases/posts/view-post";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Post as PostEntity } from "../../services/database/entities/post";
import { getPostDetails } from "../../services/firestore/use-cases/posts/get-post-details";
import { PostDetails } from "../../components/commons/PostDetails";
import { CircledButton } from "../../components/commons/CircledButton";
import { Icon } from "@iconify/react";
import { likePost } from "../../services/firestore/use-cases/posts/like-post";
import { savePost } from "../../services/firestore/use-cases/posts/save-post";
import { dislikePost } from "../../services/firestore/use-cases/posts/dislike-post";
import { unsavePost } from "../../services/firestore/use-cases/posts/unsave-post";

export function Post() {
    const isFirstTime = useRef(true);
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState<PostEntity | null>(null);
    const [postLikeId, setPostLikeId] = useState('');
    const [postSaveId, setPostSaveId] = useState('');

    const isSaved = Boolean(postSaveId.length);
    const isLiked = Boolean(postLikeId.length);

    useEffect(() => {
        if (isFirstTime.current) {
            isFirstTime.current = false;
            return;
        }

        getDetailsFromPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getDetailsFromPost() {
        if (!postId) {
            return;
        }

        const { post } = await getPostDetails(postId);

        setPostDetails(post);
        setPostLikeId(post?.interactions?.postLikeId ?? '');
        setPostSaveId(post?.interactions.postSaveId ?? '');

        if (post?.interactions.postViewId) {
            return;
        }

        await viewPost(postId);
    }

    async function handleSavePost() {
        try {
            if ((postSaveId.length ?? 0) > 0) {
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
        const { postLikeId } = await likePost(postId!);

        setPostLikeId(postLikeId);
    }

    async function handleAddSave() {
        const { postSaveId } = await savePost(postId!);

        setPostSaveId(postSaveId);
    }

    return (
        <Flex
            margin="auto"
            maxWidth="1080px"
            flexDirection="column"
            paddingTop={20}
        >
            <Flex position="relative" maxHeight="300">
                <Image
                    src="/assets/img/aaaaa.png"
                    objectFit="cover"
                    width="100%"
                    borderBottomStartRadius={200}
                />

                <CircledButton
                    title="Curtir post"
                    type="button"
                    position="absolute"
                    bottom="-10px"
                    right="-10px"
                    width={16}
                    height={16}
                    onClick={handleLikePost}
                    icon={!isLiked ? "ant-design:like-outlined" : "ant-design:like-filled"}
                />
            </Flex>

            <Flex flexDirection="column" marginTop={14} gap={4}>
                <Flex
                  as="button"
                  alignItems="center"
                  gap={2}
                  borderColor="orange.700"
                  border="1px solid #FF6F47"
                  width="fit-content"
                  padding="0.7rem 1rem"
                  background={isSaved ? "#FF6F47" : "transparent"}
                  borderRadius={4}
                  transition="all .2s"
                  onClick={handleSavePost}
                >
                    <Icon
                        icon={"bi:bookmark-fill"}
                        color={isSaved ? "#FFFFFF" : "#FF6F47"}
                        fontSize={16}
                    />

                    <Text fontWeight="bold" color={isSaved ? "#FFFFFF" : "orange.700"}>{isSaved ? "Salvo" : "Salvar"}</Text>
                </Flex>

                <Heading>
                    {postDetails?.postTitle}
                </Heading>
            </Flex>

            <PostDetails
                authorImage="/assets/img/me.jpg"
                createdAt={postDetails?.createdAt!}
                author={postDetails?.author?.name!}
                marginTop={5}
            />

            <Flex
                marginTop={10}
                paddingBottom={16}
                flexDir="column"
                id="post-content"
                dangerouslySetInnerHTML={{ __html: postDetails?.postContent ?? '' }}
            >
            </Flex>
        </Flex>
    );
}
