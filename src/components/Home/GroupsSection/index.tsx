import { Flex, Heading } from "@chakra-ui/react";
import { Carousel } from "../../commons/Carousel";
import { GroupCard } from "../../commons/GroupCard";
import { followedGroupsStaticData } from "../../Profile/ProfileInfo";

export function GroupsSection() {
    return (
        <Flex as="section" flexDirection="column" marginTop={24}>
            <Heading as="h2" size="lg" marginBottom={8}>Grupos</Heading>

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
                {followedGroupsStaticData.map((group) => (
                    <GroupCard 
                        key={group.id}
                        data={group}
                        className="keen-slider__slide"
                    />
                ))}
            </Carousel>
        </Flex>
    );
}