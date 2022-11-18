import { Flex } from "@chakra-ui/react";

import { ProfileSidebar } from "../../components/Profile/ProfileSidebar";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import { ProfileInfo } from "../../components/Profile/ProfileInfo";
import { useBreakpoint } from "../../contexts/breakpoint";

export function Profile() {
    const { isMobile } = useBreakpoint(); 

    return (
        <Flex flexDirection={isMobile ? 'column' : 'row'}>
            <Flex height="100%" flexDirection="column" width={isMobile ? "100%" : "70%"}>
                <ProfileHeader />
                <ProfileInfo />
            </Flex>

            <ProfileSidebar />
        </Flex>
    );
}