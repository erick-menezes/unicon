import { useEffect, useState } from "react";

import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from "../../commons/Carousel";
import { GroupCard } from "../../commons/GroupCard";
import { Group } from "../../../services/database/models/group";
import { getAllGroups } from "../../../services/firestore/use-cases/groups/get-all-groups";

export function GroupsSection() {
    const [suggestedGroups, setSuggestedGroups] = useState<Group[]>([]);

    useEffect(() => {
        getSuggestedGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getSuggestedGroups() {
        const { groups } = await getAllGroups();

        setSuggestedGroups(groups);
    }

    return (
        <Flex as="section" flexDirection="column" marginTop={12}>
            <Link to="/groups">
                <Heading as="h2" marginBottom={8}>Grupos</Heading>
            </Link>

            {suggestedGroups.length > 0 && (
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
                    {suggestedGroups.map((group) => (
                        <GroupCard
                            key={group.id}
                            data={group}
                            variant="vertical"
                            className="keen-slider__slide"
                        />
                    ))}
                </Carousel>
            )}

        </Flex>
    );
}
