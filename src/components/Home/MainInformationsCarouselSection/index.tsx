import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { favoritePostsStaticData } from "../../Profile/ProfileInfo/mocks";
import { ProfileFavoriteCard } from "../../Profile/ProfileInfo/components/ProfileFavoriteCard";
import { Carousel } from "../../commons/Carousel";

export function MainInformationsCarouselSection() {
    return (
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
    );
}