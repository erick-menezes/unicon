import { useParams } from "react-router-dom";

import { favoritePostsStaticData } from "../../components/Profile/ProfileInfo";

import { Flex, Heading } from "@chakra-ui/react";

export function Post() {
    const { postId } = useParams();
    const currentPost = favoritePostsStaticData.filter((post) => post.postId === postId);

    return (
        <Flex>
            {currentPost && (
                <Heading>{currentPost[0].title}</Heading>
            )}
        </Flex>
    );
}