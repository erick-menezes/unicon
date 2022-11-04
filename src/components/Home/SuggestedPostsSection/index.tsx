import { favoritePostsStaticData } from "../../Profile/ProfileInfo/mocks";

import { Fragment } from "react";

import { DividerHorizontal } from "../../Divider";
import { Flex, Heading } from "@chakra-ui/react";
import { PostCardWithInteraction } from "../../commons/PostCardWithInteraction";

export function SuggestedPostsSection() {
    return ( 
        <Flex as="section" flexDirection="column" marginTop={10}>
            <Heading as="h2" marginBottom={8}>Publicações sugeridas</Heading>

          
            <Flex flexDirection="column" gap={8}>
                {favoritePostsStaticData.map((post) => (
                    <Fragment key={post.postId}>
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
