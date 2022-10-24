import { Dispatch } from "react";

import { GroupCardData } from "../types";

export function handleUnfollowGroup(data: GroupCardData, setIsFollowed: Dispatch<React.SetStateAction<boolean>>) {
    setIsFollowed(previousState => !previousState);
    console.log('Deixou de seguir o grupo ' + data.title);
}