import { ReactNode } from "react";

import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

interface LandingContainerProps {
    children: ReactNode
}

export function LandingContainer({ children }: LandingContainerProps) {
    const isMobile = useBreakpointValue({ base: true, xl: false });

    return (
        <Flex
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="center"
          width="100%"
          height="100%"
          backgroundImage={isMobile ? `url('${process.env.PUBLIC_URL}people.webp')` : 'none'}
          backgroundSize={isMobile ? "cover" : "initial"}
          backgroundPosition={isMobile ? "center" : "initial"}
        >
            <Flex
                width={isMobile ? 'fit-content' : '50%'}
                alignSelf={isMobile ? "center" : "auto"}
                flexDirection="column"
                borderRadius={isMobile ? 10 : 0}
                rowGap={5}
                alignItems="center"
                justifyContent="center"
                background="white"
                padding={10}
            >
                {children}
            </Flex>

            {!isMobile && (
                <Flex background="app-primary" width="50%">
                    <Image objectFit="cover" maxWidth="100%" height="auto" src={process.env.PUBLIC_URL + 'people.webp'} alt="Test" />
                </Flex>
            )}
        </Flex>
    );
}