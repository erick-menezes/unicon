import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from "../../commons/Carousel";
import { GroupCard } from "../../commons/GroupCard";
import { followedGroupsStaticData } from "../../Profile/ProfileInfo/mocks";

export function GroupsSection() {
    return (
        <Flex as="section" flexDirection="column" marginTop={12}>
            <Link to="/groups">
                <Heading as="h2" marginBottom={8}>Grupos</Heading>
            </Link>

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
                        variant="vertical"
                        className="keen-slider__slide"
                    />
                ))}
            </Carousel>
        </Flex>
    );
}