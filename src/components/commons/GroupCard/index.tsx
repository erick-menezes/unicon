import { Link } from "react-router-dom";

import { GroupCardProps, VariantCardProps } from "./types";
import { handleUnfollowGroup } from "./functions";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import 'keen-slider/keen-slider.min.css';

function HorizontalCard({ data, ...rest }: VariantCardProps) {
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
                    <Text as={Link} to={`/groups/${data.id}`} fontSize="lg" fontWeight="semibold" noOfLines={1} title={data.title}>{data.title}</Text>
                    <Text>{data.postsAmount} postagens</Text>
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
                    onClick={() => handleUnfollowGroup(data)}
                >
                    <Icon 
                        icon="bxs:trash-alt"
                        color="#63E1FD"
                        fontSize={28}
                    />
                </Button>
            </Box>
            
        </Flex>
    )
}

function VerticalCard({ data, ...rest }: VariantCardProps) {
    return (
        <Flex
            flexDirection="column"
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
                    <Text as={Link} to={`/groups/${data.id}`} fontSize="lg" fontWeight="semibold" noOfLines={1} title={data.title}>{data.title}</Text>
                    <Text>{data.postsAmount} postagens</Text>
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
                    onClick={() => handleUnfollowGroup(data)}
                >
                    <Icon 
                        icon="bxs:trash-alt"
                        color="#63E1FD"
                        fontSize={28}
                    />
                </Button>
            </Box>
        </Flex>
    )
}

export function GroupCard({ variant, data, ...rest }: GroupCardProps) {
    return variant === 'horizontal' ? (
        <HorizontalCard data={data} {...rest} />
    ) : (
        <VerticalCard data={data} {...rest} />
    );
}

GroupCard.defaultProps = {
    variant: "horizontal",
}