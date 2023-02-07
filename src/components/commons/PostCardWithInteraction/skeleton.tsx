import { Flex, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export function PostCardWithInteractionSkeleton() {
    return (
        <Flex flexDirection="column" gap={6} width="100%">
            <Skeleton
                height={220}
                startColor="gray.200"
                endColor="gray.300"
                borderRadius={10}
            />

            <Flex
                flexDirection={{ base: "column", xl: "row" }}
                alignItems={{ base: "flex-start", xl: "center" }}
                gap={8}
                justifyContent="space-between"
            >
                <SkeletonText
                    width={400}
                    noOfLines={1}
                    flexShrink={1}
                    startColor="gray.200"
                    endColor="gray.300"
                />

                <SkeletonText
                    width={220}
                    noOfLines={1}
                    flexShrink={1}
                    startColor="gray.200"
                    endColor="gray.300"
                />
            </Flex>

            <SkeletonText
                noOfLines={2}
                startColor="gray.200"
                endColor="gray.300"
            />

            <Flex
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                marginTop={2}
            >
                <SkeletonCircle
                    size='42'
                    startColor="gray.200"
                    endColor="gray.300"
                />

                <Flex flexDirection="column" gap={2}>
                    <SkeletonText
                        width={40}
                        noOfLines={1}
                        startColor="gray.200"
                        endColor="gray.300"
                    />

                    <SkeletonText
                        width={28}
                        noOfLines={1}
                        startColor="gray.200"
                        endColor="gray.300"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
