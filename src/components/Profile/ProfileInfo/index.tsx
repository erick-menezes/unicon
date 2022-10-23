import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { InformationSection } from "./components/InformationSection";
import { FollowingSection } from "./components/FollowingSection";
import { FavoritePostsSection } from "./components/FavoritePostsSection";

export function ProfileInfo() {
    const isMobile = useBreakpointValue({ base: true, xl: false });
    
    return (
        <Flex as="section" paddingTop={isMobile ? 40 : 190} paddingLeft={isMobile ? 10 : 16} width="100%">
            <Flex flexDirection="column" width="100%">
                <InformationSection />
                <FollowingSection />
                <FavoritePostsSection />
            </Flex>
        </Flex>
    );
}