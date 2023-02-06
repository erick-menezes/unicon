import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";

interface PostDetailsProps extends FlexProps {
    author: string;
    authorImage?: string;
    createdAt: Date;
}

export function PostDetails({ author, authorImage, createdAt, ...rest }: PostDetailsProps) {
    return (
        <Flex gap={4} {...rest}>
            <Flex
                width={12}
                height={12}
                borderRadius="50%"
                overflow="hidden"
                justify="center"
                alignItems="center"
            >
                <Image
                    src={authorImage}
                />
            </Flex>

            <Flex flexDirection="column">
                <Text as="span" fontWeight="bold">{author}</Text>
                <Text as="span" color="gray.300">{createdAt?.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
            </Flex>
        </Flex>
    );
}
