import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { ProfileSidebar } from "../../components/Profile/ProfileSidebar";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";
import { ProfileInfo } from "../../components/Profile/ProfileInfo";

export function Profile() {
    const isMobile = useBreakpointValue({ base: true, xl: false });

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