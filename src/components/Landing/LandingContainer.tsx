import { ReactNode } from "react";

import { Flex, Image } from "@chakra-ui/react";
import { useBreakpoint } from "../../contexts/breakpoint";

interface LandingContainerProps {
    children: ReactNode
}

export function LandingContainer({ children }: LandingContainerProps) {
    const { isMobile } = useBreakpoint();

    return (
        <Flex
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="center"
          width="100%"
          height="100%"
          backgroundImage={isMobile ? `url('${process.env.PUBLIC_URL}assets/img/library.jpg')` : 'none'}
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
                <Flex background="cyan.300" width="50%">
                    <Image objectFit="cover" maxWidth="100%" height="auto" src={process.env.PUBLIC_URL + 'assets/img/library.jpg'} alt="Test" />
                </Flex>
            )}
        </Flex>
    );
}
