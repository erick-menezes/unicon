import { GroupCardData } from "../types";

export function handleUnfollowGroup(data: GroupCardData) {
    console.log('Deixou de seguir o grupo ' + data.title);
}