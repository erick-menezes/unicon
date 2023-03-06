
import { Flex, Heading, Skeleton, Text } from "@chakra-ui/react";

import { SuggestedPostsSection } from "../../components/Home/SuggestedPostsSection";
import { GroupsSection } from "../../components/Home/GroupsSection";
import { MainInformationsCarouselSection } from "../../components/Home/MainInformationsCarouselSection";
import { DividerHorizontal } from "../../components/Divider";
import { useAuth } from "../../contexts/auth";

export function Home() {
    const { userData } = useAuth();

    const firstName = userData?.name?.split(' ')[0];

    return (
        <Flex alignItems="center" justifyContent="center">
            <Flex
                as="main"
                flexDirection="column"
                width={{
                    base: "90%",
                    xl: "50%"
                }}
                paddingTop={10}
                paddingBottom={10}
            >
                <Heading as="h2" display="flex" gap={2}>
                    Olá,
                    {
                        <Skeleton
                            width="100%"
                            maxWidth={120}
                            isLoaded={Boolean(firstName)}
                            startColor="gray.200"
                            endColor="gray.300"
                        >
                            {firstName}!
                        </Skeleton>
                    }
                </Heading>
                <Text lineHeight={10}>Veja aqui as novidades e informações e fique por dentro de tudo que acontece.</Text>

                <MainInformationsCarouselSection />

                <DividerHorizontal marginTop={4} />

                <SuggestedPostsSection />

                <GroupsSection />
            </Flex>
        </Flex>
    );
}
