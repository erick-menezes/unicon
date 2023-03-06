import { Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { followedGroupsStaticData } from "../../utils/mocks";

export function Group() {
    const { groupId } = useParams();
    const currentGroup = followedGroupsStaticData.filter((group) => group.id === groupId);

    return (
        <Flex alignItems="center" justifyContent="center" paddingTop={12}>
            <Heading>Página de grupo (em desenvolvimento)</Heading>
            {currentGroup.length > 0 && (
                <Heading>{currentGroup[0].title}</Heading>
            )}
        </Flex>
    );
}
