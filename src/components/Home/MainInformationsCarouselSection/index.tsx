import { useState, useEffect } from 'react';

import { getAllPosts } from '../../../services/firestore/use-cases/posts/get-all-posts';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

// import { favoritePostsStaticData } from "../../Profile/ProfileInfo/mocks";
import { ProfileFavoriteCard } from "../../Profile/ProfileInfo/components/ProfileFavoriteCard";
import { Carousel } from "../../commons/Carousel";
import { Post } from '../../../services/database/entities/post';
import { ProfileFavoriteCardSkeleton } from '../../Profile/ProfileInfo/components/ProfileFavoriteCard/skeleton';

interface PostsDataType {
    trending: Post[];
    academicCalendar: Post[];
    financial: Post[];
}

export function MainInformationsCarouselSection() {
    const [posts, setPosts] = useState<PostsDataType>({
        trending: [],
        academicCalendar: [],
        financial: [],
    });

    useEffect(() => {
        getPosts();
    }, [])

    async function getPosts() {
        const { posts } = await getAllPosts();

        setPosts({
            trending: posts,
            academicCalendar: posts,
            financial: posts,
        })
    }

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
                        {(posts?.trending?.length > 0)
                            ? posts?.trending?.map((post) => (
                                <ProfileFavoriteCard
                                    minWidth={346}
                                    key={post.id}
                                    data={post}
                                    marginTop={6}
                                    overflow="initial !important"
                                    className="keen-slider__slide"
                                />
                            )) : Array.from({ length: 4 }).map((_, index) => (
                                <ProfileFavoriteCardSkeleton key={`skeleton-${index}`} />
                            ))
                        }
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
                        {(posts?.academicCalendar?.length > 0)
                            ? posts?.academicCalendar?.map((post) => (
                                <ProfileFavoriteCard
                                    minWidth={346}
                                    key={post.id}
                                    data={post}
                                    marginTop={6}
                                    overflow="initial !important"
                                    className="keen-slider__slide"
                                />
                            )) : Array.from({ length: 4 }).map((_, index) => (
                                <ProfileFavoriteCardSkeleton key={`skeleton-${index}`} />
                            ))
                        }
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
                        {(posts?.financial?.length > 0)
                            ? posts?.financial?.map((post) => (
                                <ProfileFavoriteCard
                                    minWidth={346}
                                    key={post.id}
                                    data={post}
                                    marginTop={6}
                                    overflow="initial !important"
                                    className="keen-slider__slide"
                                />
                            )) : Array.from({ length: 4 }).map((_, index) => (
                                <ProfileFavoriteCardSkeleton key={`skeleton-${index}`} />
                            ))
                        }
                    </Carousel>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
