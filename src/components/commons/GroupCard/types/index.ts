import { Dispatch } from "react";
import { FlexProps } from "@chakra-ui/react";
import { Group } from "../../../../services/database/models/group";

type VariantType = 'horizontal' | 'vertical';

export interface GroupCardProps extends FlexProps {
    variant: VariantType;
    data: Group;
}

export type VariantCardProps = {
    isFollowed: boolean;
    onFollow: Dispatch<React.SetStateAction<boolean>>,
    postAmount: number,
} & Omit<GroupCardProps, 'variant'>;
