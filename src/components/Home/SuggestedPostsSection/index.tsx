import { Fragment, useEffect, useState } from "react";

import { DividerHorizontal } from "../../Divider";
import { Flex, Heading } from "@chakra-ui/react";
import { PostCardWithInteraction } from "../../commons/PostCardWithInteraction";
import { PostRepository } from "../../../services/firestore/repositories/Posts";
import { Post } from "../../../services/firestore/repositories/Posts/types";

export function SuggestedPostsSection() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getAllPosts();
    }, [])

    async function getAllPosts() {
        const posts = await PostRepository.index();
        
        setPosts(posts as Post[]);
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
