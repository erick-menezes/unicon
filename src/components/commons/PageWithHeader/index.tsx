import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header";

export function PageWithHeader() {
    return (
        <Flex flexDirection="column">
            <Header />
            <Outlet />
        </Flex>
    );
}
