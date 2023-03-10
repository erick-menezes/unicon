import { PropsWithChildren, useEffect, useState } from 'react';

import { Box } from "@chakra-ui/react";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import { CircledButton } from '../CircledButton';
import { useBreakpoint } from '../../../contexts/breakpoint';

interface CarouselProps {
    options: KeenSliderOptions;
}

export function Carousel({ children, options }: PropsWithChildren<CarouselProps>) {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        ...options,
    });
    const { isMobile } = useBreakpoint();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.update();
        }
    }, [children]);

    function showPreviousSlide(e: any) {
        e.stopPropagation() || instanceRef.current?.prev();
    }

    function showNextSlide(e: any) {
        e.stopPropagation() || instanceRef.current?.next()
    }

    return (
        <Box ref={sliderRef} className="keen-slider">
            {children}

            {!isMobile && (
                <>
                    <CircledButton
                        icon="akar-icons:chevron-left"
                        position="absolute"
                        top="50%"
                        transform="translateY(-50%)"
                        background="yellow.800"
                        _hover={{
                            filter: "brightness(0.9)"
                        }}
                        _active={{
                            filter: "brightness(0.9)"
                        }}
                        disabled={currentSlide === 0}
                        onClick={showPreviousSlide}
                    />

                    <CircledButton
                        icon="akar-icons:chevron-right"
                        position="absolute"
                        top="50%"
                        transform="translateY(-50%)"
                        right="0"
                        background="yellow.800"
                        _hover={{
                            filter: "brightness(0.9)"
                        }}
                        _active={{
                            filter: "brightness(0.9)"
                        }}
                        disabled={currentSlide === (instanceRef.current && instanceRef.current.track.details?.slides?.length - 1)}
                        onClick={showNextSlide}
                    />
                </>
            )}
        </Box>
    );
}
