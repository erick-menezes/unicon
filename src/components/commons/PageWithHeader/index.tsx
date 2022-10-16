import { Outlet } from "react-router-dom";

import { Header } from "../Header";

export function PageWithHeader() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}