import { Box, Button, Flex, FlexProps, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import 'keen-slider/keen-slider.min.css';
import { Link } from "react-router-dom";

interface GroupCardData {
    id: string;
    title: string; 
    postsAmount: number;
    groupImage: string;
}

interface GroupCardProps extends FlexProps {
    data: GroupCardData;
}

export function GroupCard({ data, ...rest }: GroupCardProps) {
    function handleUnfollowGroup() {
        console.log('Deixou de seguir o grupo ' + data.title);
    }

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            minWidth="300px"
            {...rest}
        >
            <Flex columnGap={4} alignItems="center">
                <Box>
                    <Image
                        objectFit="cover"
                        maxWidth={16}
                        height="auto"
                        src={data.groupImage}
                        alt={data.title}
                    />
                </Box>
                
                <Flex flexDirection="column" rowGap={0.5}>
                    <Text as={Link} to={`/groups/${data.id}`} fontSize="lg" noOfLines={1} title={data.title}>{data.title}</Text>
                    <Text fontSize="md">{data.postsAmount} postagens</Text>
                </Flex>
            </Flex>

            <Box>
                <Button

                    background="transparent"
                    transition="background .3s"
                    _hover={{
                        background: 'transparent'
                    }}
                    _active={{
                        background: "transparent",
                    }}
                    onClick={handleUnfollowGroup}
                >
                    <Icon 
                        icon="bxs:trash-alt"
                        color="#63E1FD"
                        fontSize={28}
                    />
                </Button>
            </Box>
            
        </Flex>
    );
}