import { HeadingStyled } from "../../commons/HeadingStyled";
import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";

interface ProfileInfoHeaderProps extends FlexProps {
    title: string;
    children: React.ReactNode;
}

export function ProfileInfoSection({ title, children, ...rest }: ProfileInfoHeaderProps) {
    const isMobile = useBreakpointValue({ base: true, xl: false });

    return (
        <>
            <HeadingStyled as="h2" marginTop={10} marginBottom={10} fontSize="3xl">
                {title}
            </HeadingStyled>
            
            <Flex  
                alignItems="flex-start"
                flexDirection={isMobile ? 'column' : 'row'} 
                fontSize="lg"
                width="100%"
                {...rest}
            >
                {children}
            </Flex>
        </>
    );
}