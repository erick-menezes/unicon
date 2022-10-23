import { favoritePostsStaticData } from "../../Profile/ProfileInfo/mocks";

import { Fragment } from "react";

import { Divider, Flex, Heading } from "@chakra-ui/react";
import { PostCardWithInteraction } from "../../commons/PostCardWithInteraction";

function SuggestedPostsSection() {
    return ( 
        <Flex as="section" flexDirection="column" marginTop={24}>
            <Heading as="h2" marginBottom={8}>Publicações sugeridas</Heading>

          
            <Flex flexDirection="column" gap={8}>
                {favoritePostsStaticData.map((post) => (
                    <Fragment key={post.postId}>
                        <PostCardWithInteraction
                            postData={post}
                        />

                        <Divider borderColor="gray.200" height="10px" />
                    </Fragment>
                ))}
            </Flex>
        </Flex>
    );
}

export default SuggestedPostsSection;