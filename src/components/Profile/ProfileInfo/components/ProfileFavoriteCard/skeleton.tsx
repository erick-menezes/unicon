import { Skeleton } from "@chakra-ui/react";

export function ProfileFavoriteCardSkeleton() {
    return (
        <Skeleton
            minWidth={330}
            height={317}
            marginTop={6}
            borderRadius="2rem"
            className="keen-slider__slide"
            startColor="gray.200"
            endColor="gray.300"
        />
    );
}
