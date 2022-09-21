import { Box, Button, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import 'keen-slider/keen-slider.min.css';


interface GroupCardProps {
    title: string;
    postsAmount: number;
    groupImage: string;
}

export function GroupCard({ title, postsAmount, groupImage }: GroupCardProps) {
    const isMobile = useBreakpointValue({ base: true, xl: false });

    function handleUnfollowGroup() {
        console.log('Deixou de seguir o grupo ' + title);
    }

    return (
        <Flex justifyContent="space-between" width={isMobile ? '90%' : '100%'} maxWidth="500px" alignItems="center">
            <Flex columnGap={4} alignItems="center">
                <Box>
                    <Image objectFit="cover" maxWidth={16} height="auto" src={groupImage} alt={title} />
                </Box>
                
                <Flex flexDirection="column" rowGap={0.5}>
                    <Text fontSize="lg" noOfLines={1}>{title}</Text>
                    <Text fontSize="md">{postsAmount} postagens</Text>
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