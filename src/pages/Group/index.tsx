import { Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { followedGroupsStaticData } from "../../utils/mocks";

export function Group() {
    const { groupId } = useParams();
    const currentGroup = followedGroupsStaticData.filter((group) => group.id === groupId);

    return (
        <Flex>
            {currentGroup && (
                <Heading>{currentGroup[0].title}</Heading>
            )}
        </Flex>
    );
}
