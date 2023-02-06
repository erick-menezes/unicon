import { Fragment, useEffect, useState } from "react";

import { Post } from "../../../services/database/entities/post";
import { getAllPosts } from "../../../services/firestore/use-cases/posts/get-all-posts";

import { DividerHorizontal } from "../../Divider";
import { Flex, Heading } from "@chakra-ui/react";
import { PostCardWithInteraction } from "../../commons/PostCardWithInteraction";

export function SuggestedPostsSection() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts();
    }, [])

    async function getPosts() {
        const { posts } = await getAllPosts();

        setPosts(posts);
    }

    return (
        <Flex as="section" flexDirection="column" marginTop={10}>
            <Heading as="h2" marginBottom={8}>Publicações sugeridas</Heading>


            <Flex flexDirection="column" gap={8}>
                {posts.map((post) => (
                    <Fragment key={post.id}>
                        <PostCardWithInteraction
                            postData={post}
                        />

                        <DividerHorizontal />
                    </Fragment>
                ))}
            </Flex>
        </Flex>
    );
}
