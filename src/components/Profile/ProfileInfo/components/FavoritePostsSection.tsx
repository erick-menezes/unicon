import { favoritePostsStaticData } from "../mocks";

import { ProfileFavoriteCard } from "./ProfileFavoriteCard";
import { HeadingStyled } from "../../../commons/HeadingStyled";
import { Grid, GridItem } from "@chakra-ui/react";

export function FavoritePostsSection() {
    return (
        <>
            <HeadingStyled 
                as="h2" 
                marginTop={10} 
                marginBottom={10} 
                size="md"
            >
                Favoritos
            </HeadingStyled>

            <Grid 
                placeItems="flex-end" 
                templateColumns={{ base: "1fr", xl: "repeat(3, 1fr)" }} 
                columnGap={4} 
                rowGap={10} 
                width="100%"
            >
                {favoritePostsStaticData.map((post) => (
                    <GridItem>
                        <ProfileFavoriteCard
                            data={post}
                        />
                    </GridItem>
                ))}
            </Grid>
        </>
    );
}