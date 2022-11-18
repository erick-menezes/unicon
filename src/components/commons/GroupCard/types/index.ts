import { Dispatch } from "react";
import { FlexProps } from "@chakra-ui/react";
import { Group } from "../../../../services/firestore/repositories/Groups/types";

type VariantType = 'horizontal' | 'vertical';

// export interface GroupCardData {
//     id: string;
//     title: string; 
//     postsAmount: number;
//     groupImage: string;
//     coverImage?: string;
// }

export interface GroupCardProps extends FlexProps {
    variant: VariantType;
    data: Group;
}

export type VariantCardProps = {
    isFollowed: boolean;
    onFollow: Dispatch<React.SetStateAction<boolean>>,
    postAmount: number,
} & Omit<GroupCardProps, 'variant'>;