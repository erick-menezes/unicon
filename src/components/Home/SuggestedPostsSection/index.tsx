import { favoritePostsStaticData } from "../../Profile/ProfileInfo";

import { Divider, Flex, Heading } from "@chakra-ui/react";
import { PostCardWithInteraction } from "../../commons/PostCardWithInteraction";

function SuggestedPostsSection() {
    return ( 
        <Flex as="section" flexDirection="column" marginTop={24}>
            <Heading as="h2" marginBottom={8}>Publicações sugeridas</Heading>

          
            <Flex flexDirection="column" gap={8}>
                {favoritePostsStaticData.map((post) => (
                    <>    
                        <PostCardWithInteraction
                            key={post.postId}
                            postData={post}
                        />

                        <Divider />
                    </>
                ))}
            </Flex>
        </Flex>
    );
}

export default SuggestedPostsSection;