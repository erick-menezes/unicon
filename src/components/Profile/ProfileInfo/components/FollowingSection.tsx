import { followedGroupsStaticData } from "../mocks";

import { Carousel } from "../../../commons/Carousel";
import { GroupCard } from "../../../commons/GroupCard";
import { HeadingStyled } from "../../../commons/HeadingStyled";

import "keen-slider/keen-slider.min.css";

export function FollowingSection() {
    return (
        <>
            <HeadingStyled 
                as="h2" 
                marginTop={10} 
                marginBottom={10} 
                size="md"
            >
                Seguindo
            </HeadingStyled>

            <Carousel
                options={{
                    mode: "snap",
                    slides: {
                        perView: "auto",
                        spacing: 30,
                        origin: 0.04,
                    },
                }}
            >
                {followedGroupsStaticData.map((group) => (
                    <GroupCard 
                        key={group.id}
                        data={group}
                        className="keen-slider__slide"
                    />
                ))}
            </Carousel>
        </>
    );
}