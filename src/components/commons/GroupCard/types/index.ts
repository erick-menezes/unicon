import { FlexProps } from "@chakra-ui/react";

type VariantType = 'horizontal' | 'vertical';

export interface GroupCardData {
    id: string;
    title: string; 
    postsAmount: number;
    groupImage: string;
}

export interface GroupCardProps extends FlexProps {
    variant: VariantType;
    data: GroupCardData;
}

export type VariantCardProps = Omit<GroupCardProps, 'variant'>