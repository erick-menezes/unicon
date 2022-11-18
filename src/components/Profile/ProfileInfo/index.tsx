import { Flex } from "@chakra-ui/react";

import { InformationSection } from "./components/InformationSection";
import { FollowingSection } from "./components/FollowingSection";
import { FavoritePostsSection } from "./components/FavoritePostsSection";
import { useBreakpoint } from "../../../contexts/breakpoint";

export function ProfileInfo() {
    const { isMobile } = useBreakpoint(); 
    
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