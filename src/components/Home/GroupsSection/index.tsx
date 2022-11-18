import { useEffect, useState } from "react";

import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from "../../commons/Carousel";
import { GroupCard } from "../../commons/GroupCard";
import { GroupRepository } from "../../../services/firestore/repositories/Groups";
import { Group } from "../../../services/firestore/repositories/Groups/types";

export function GroupsSection() {
    const [suggestedGroups, setSuggestedGroups] = useState<Group[]>([]);

    useEffect(() => {
        getSuggestedGroups();
    }, []);

    async function getSuggestedGroups() {
        const groups = await GroupRepository.index();
        
        console.log(groups);

        setSuggestedGroups(groups as Group[]);
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