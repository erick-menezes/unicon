import { Dispatch } from "react";
import { FlexProps } from "@chakra-ui/react";

type VariantType = 'horizontal' | 'vertical';

export interface GroupCardData {
    id: string;
    title: string; 
    postsAmount: number;
    groupImage: string;
    coverImage?: string;
}

export interface GroupCardProps extends FlexProps {
    variant: VariantType;
    data: GroupCardData;
}

export type VariantCardProps = {
    isFollowed: boolean;
    onFollow: Dispatch<React.SetStateAction<boolean>> 
} & Omit<GroupCardProps, 'variant'>;