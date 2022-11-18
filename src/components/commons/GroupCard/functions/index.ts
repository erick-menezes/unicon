import { Dispatch } from "react";
import { Group } from "../../../../services/firestore/repositories/Groups/types";

// import { GroupCardData } from "../types";

export function handleUnfollowGroup(data: Group, setIsFollowed: Dispatch<React.SetStateAction<boolean>>) {
    setIsFollowed(previousState => !previousState);
    console.log('Deixou de seguir o grupo ' + data.name);
}