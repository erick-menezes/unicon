import { useBreakpointValue } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface BreakpointProviderProps {
    children: ReactNode;
}

interface BreakPointContextValueType {
    isMobile: boolean;
}

const BreakpointContext = createContext({} as BreakPointContextValueType);

export function BreakpointProvider({ children }: BreakpointProviderProps) {
    const isMobile = useBreakpointValue({ base: true, xl: false }) ?? true;

    return (
        <BreakpointContext.Provider value={{ isMobile }}>
            {children}
        </BreakpointContext.Provider>
    );
}

export function useBreakpoint() {
    const breakpoint = useContext(BreakpointContext);

    return breakpoint;
}