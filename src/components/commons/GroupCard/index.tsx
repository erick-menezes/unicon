import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { GroupCardProps, VariantCardProps } from "./types";
import { handleUnfollowGroup } from "./functions";

import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import 'keen-slider/keen-slider.min.css';
import { StyledButton } from "../StyledButton";
import { countGroupPosts } from '../../../services/firestore/use-cases/groups/count-group-posts';

function HorizontalCard({ data, isFollowed, onFollow, postAmount, ...rest }: VariantCardProps) {
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
                        src={'https://icon-library.com/images/it-services-icon/it-services-icon-1.jpg'}
                        alt={data.name}
                    />
                </Box>

                <Flex flexDirection="column" rowGap={0.5}>
                    <Text as={Link} to={`/groups/${data.id}`} fontSize="lg" fontWeight="semibold" noOfLines={1} title={data.name}>{data.name}</Text>
                    <Text>{postAmount} postagens</Text>
                </Flex>
            </Flex>

            <Box>
                <Tooltip background="cyan.500" borderRadius={12} color="white" label={isFollowed ? 'Sair do grupo' : 'Entrar no grupo'}>
                    <Button

                        background="transparent"
                        transition="background .3s"
                        _hover={{
                            background: 'transparent'
                        }}
                        _active={{
                            background: "transparent",
                        }}
                        onClick={() => handleUnfollowGroup(data, onFollow)}
                    >
                        <Icon
                            icon={isFollowed ? "ep:remove-filled" : "carbon:add-filled"}
                            color="#63E1FD"
                            fontSize={32}
                        />
                    </Button>
                </Tooltip>
            </Box>

        </Flex>
    )
}

function VerticalCard({ data, isFollowed, onFollow, postAmount, ...rest }: VariantCardProps) {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            width="100%"
            height="100%"
            minWidth="180px"
            minHeight="194px"
            gap={8}
            borderRadius={10}
            {...rest}
        >
            <Box position="relative" width="100%">
                <Image
                    objectFit="cover"
                    width="100%"
                    maxHeight="78px"
                    height="auto"
                    src={'/assets/img/image.png'}
                    alt={'Imagem de capa do grupo' + data.name}
                />

                <Box
                    width={16}
                    height={16}
                    borderRadius="50%"
                    background="white"
                    position="absolute"
                    bottom={-8}
                    left={0}
                    right={0}
                    marginRight="auto"
                    marginLeft="auto"
                >
                    <Image
                        objectFit="cover"
                        maxWidth={16}
                        width="auto"
                        height="auto"
                        src={'https://icon-library.com/images/it-services-icon/it-services-icon-1.jpg'}
                        alt={data.name}
                    />
                </Box>
            </Box>

            <Flex
                flexDirection="column"
                gap={0.5}
                alignItems="center"
            >
                <Text as={Link} to={`/groups/${data.id}`} fontWeight="semibold" noOfLines={1} title={data.name}>{data.name}</Text>
                <Text size="sm">{postAmount} postagens</Text>
            </Flex>

            <StyledButton onClick={() => handleUnfollowGroup(data, onFollow)} padding="1rem 2rem">
                {isFollowed ? 'Seguindo' : 'Seguir'}
            </StyledButton>
        </Flex>
    )
}

export function GroupCard({ variant = "horizontal", data, ...rest }: GroupCardProps) {
    const [isFollowed, setIsFollowed] = useState(false);
    const [postAmount, setPostAmount] = useState(0);

    useEffect(() => {
        getGroupPostAmount();
    }, []);

    async function getGroupPostAmount() {
        const { postAmount } = await countGroupPosts(data.id!);

        setPostAmount(postAmount);
    }

    return variant === 'horizontal' ? (
        <HorizontalCard data={data} isFollowed={isFollowed} onFollow={setIsFollowed} postAmount={postAmount} {...rest} />
    ) : (
        <VerticalCard data={data} isFollowed={isFollowed} onFollow={setIsFollowed} postAmount={postAmount} {...rest} />
    );
}
