import { AdminMainPage } from "./AdminMainPage";
import { StudentMainPage } from "./StudentMainPage";

interface HomeProps {
    accessType: "User" | "Creator";
}

export function Home({ accessType }: HomeProps) {
    return accessType === 'User' ? (
        <StudentMainPage />
    ) : (
        <AdminMainPage />
    );
}
