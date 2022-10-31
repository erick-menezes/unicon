import { AdminMainPage } from "./AdminMainPage";
import { StudentMainPage } from "./StudentMainPage";

interface HomeProps {
    accessType: string;
}

export function Home({ accessType }: HomeProps) {
    return accessType === 'user' ? (
        <StudentMainPage />
    ) : (
        <AdminMainPage />
    );
}