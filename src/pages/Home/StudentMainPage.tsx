
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

import { SuggestedPostsSection } from "../../components/Home/SuggestedPostsSection";
import { GroupsSection } from "../../components/Home/GroupsSection";
import { MainInformationsCarouselSection } from "../../components/Home/MainInformationsCarouselSection";

export function StudentMainPage() {
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
                <Heading as="h2">Olá, Erick</Heading>
                <Text lineHeight={10}>Veja aqui as novidades e informações e fique por dentro de tudo que acontece.</Text>

                <MainInformationsCarouselSection />

                <Divider marginTop={4} borderColor="gray.200" height="10px" />

                <SuggestedPostsSection />

                <GroupsSection />
            </Flex>
        </Flex>
    );
}