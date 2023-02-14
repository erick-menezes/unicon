import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

interface GroupCardSkeletonProps {
    variant: 'vertical' | 'horizontal';
}

function GroupCardVerticalSkeleton() {
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
        >
            <Box position="relative" width="100%">
                <Skeleton
                    width="100%"
                    maxHeight="78px"
                    height="100%"
                />

                <SkeletonCircle
                    width={16}
                    height={16}
                    bottom={-8}
                    left={0}
                    right={0}
                    marginRight="auto"
                    marginLeft="auto"
                    position="absolute"
                />
            </Box>

            <Flex
                flexDirection="column"
                gap={0.5}
                alignItems="center"
            >
                <Skeleton />
                <Skeleton />
            </Flex>

            <Skeleton padding="1rem 2rem" />
        </Flex>
    );
}

function GroupCardHorizontalSkeleton() {
    return (
        <Flex></Flex>
    );
}

export function GroupCardSkeleton({ variant }: GroupCardSkeletonProps) {
    return variant === 'horizontal' ? <GroupCardHorizontalSkeleton /> : <GroupCardVerticalSkeleton />
}
