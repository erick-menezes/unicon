import SuggestedPostsSection from "../../components/Home/SuggestedPostsSection";

import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { favoritePostsStaticData } from "../../components/Profile/ProfileInfo";
import { ProfileFavoriteCard } from "../../components/Profile/ProfileInfo/components/ProfileFavoriteCard";
import { Carousel } from "../../components/commons/Carousel";
import { GroupsSection } from "../../components/Home/GroupsSection";

export function Home() {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Flex as="main" flexDirection="column" width="50%" paddingTop={10}>
                <Heading as="h2">Olá, Erick</Heading>
                <Text lineHeight={10}>Veja aqui as novidades e informações e fique por dentro de tudo que acontece</Text>

                <Tabs isLazy colorScheme="yellow" marginTop={4}>
                    <TabList>
                        <Tab>Em alta</Tab>
                        <Tab>Calendário Acadêmico</Tab>
                        <Tab>Financeiro</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Carousel
                                options={{
                                    mode: "snap",
                                    slides: {
                                        perView: "auto",
                                        spacing: 30,
                                        origin: 0.04,
                                    },
                                }}
                            >
                                {favoritePostsStaticData.map((post) => (
                                    <ProfileFavoriteCard
                                        minWidth={346}
                                        key={post.postId}
                                        data={post}
                                        marginTop={6}
                                        overflow="initial !important"
                                        className="keen-slider__slide"
                                    />
                                ))}
                            </Carousel>
                        </TabPanel>
                        <TabPanel>
                            <Carousel
                                    options={{
                                        mode: "snap",
                                        slides: {
                                            perView: "auto",
                                            spacing: 30,
                                            origin: 0.04,
                                        },
                                    }}
                                >
                                    {favoritePostsStaticData.map((post) => (
                                        <ProfileFavoriteCard
                                            minWidth={346}
                                            key={post.postId}
                                            data={post}
                                            marginTop={6}
                                            overflow="initial !important"
                                            className="keen-slider__slide"
                                        />
                                    ))}
                            </Carousel>
                        </TabPanel>
                        <TabPanel>
                            <Carousel
                                    options={{
                                        mode: "snap",
                                        slides: {
                                            perView: "auto",
                                            spacing: 30,
                                            origin: 0.04,
                                        },
                                    }}
                                >
                                    {favoritePostsStaticData.map((post) => (
                                        <ProfileFavoriteCard
                                            minWidth={346}
                                            key={post.postId}
                                            data={post}
                                            marginTop={6}
                                            overflow="initial !important"
                                            className="keen-slider__slide"
                                        />
                                    ))}
                            </Carousel>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <SuggestedPostsSection />

                <GroupsSection />
            </Flex>
        </Flex>
    );
}