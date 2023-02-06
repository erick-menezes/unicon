import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import { Flex, Grid, GridItem, Heading, Input, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { GroupCard } from "../../components/commons/GroupCard";
import { StyledButton } from "../../components/commons/StyledButton";
import { DividerHorizontal } from "../../components/Divider";

import { Group } from "../../services/database/models/group";
import { Category } from "../../services/database/entities/category";

import { getAllCategoriesWithGroups } from "../../services/firestore/use-cases/categories/get-categories-with-groups";
import { getAllGroups } from '../../services/firestore/use-cases/groups/get-all-groups';

export function GroupHub() {
    const [groupList, setGroupList] = useState<Group[]>([]);
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [groupFetchLoading, setGroupFetchLoading] = useState(false);
    const [categoryFetchLoading, setCategoryFetchLoading] = useState(false);

    useEffect(() => {
        getAllGroupsList();
        getAllCategoriesList();
    }, []);

    async function getAllGroupsList() {
        try {
            setGroupFetchLoading(true);

            const { groups } = await getAllGroups();

            setGroupList(groups);
        } catch (error) {
            console.log(error);
        } finally {
            setGroupFetchLoading(false);
        }
    }

    async function getAllCategoriesList() {
        try {
            setCategoryFetchLoading(true);

            const { categories } = await getAllCategoriesWithGroups();

            setCategoryList(categories);
        } catch (error) {
            console.log(error);
        } finally {
            setCategoryFetchLoading(false);
        }
    }

    return (
        <Flex flexDirection="column">
            <Flex justifyContent="space-between" padding="2rem 6rem" alignItems="end">
                <Flex flexDirection="column" gap={4}>
                    <Heading as="h1" size="lg">
                        Grupos
                    </Heading>

                    <Text>Encontre todos os grupos que possam ser de seu interesse aqui!</Text>
                </Flex>
                <StyledButton gap={2} maxWidth="225px" paddingTop={0} paddingBottom={0}>
                     <Icon
                        icon="ant-design:usergroup-add-outlined"
                        fontSize={32}
                     />
                    Criar grupo
                </StyledButton>
            </Flex>

            <DividerHorizontal />

            <Flex gap={8} marginTop={8}>
                <Flex paddingInline={8} flexDirection="column" maxWidth={300} width="100%">
                    <Flex gap={2} alignItems="center">
                        <Icon
                            icon="mingcute:filter-2-fill"
                            fontSize={20}
                        />
                        <Text size="lg" fontWeight="bold">Filtro</Text>
                    </Flex>

                    <Flex flexDirection="column" gap={2}>
                        <Input
                            marginTop={4}
                            borderColor="gray.100"
                            _placeholder={{
                                color:'darkgray'
                            }}
                            _hover={{}}
                            height={12}
                            placeholder="Pesquisar grupo"
                        />

                        <StyledButton
                            background="blue.500"
                            boxShadow="none"
                            color="white"
                            fontWeight="bold"
                            _hover={{
                                background: 'blue.600'
                            }}
                            paddingTop={0}
                            paddingBottom={0}
                        >
                            Pesquisar
                        </StyledButton>
                    </Flex>

                    <Text fontWeight={600} color="gray.300" marginTop={4}>Categorias ({categoryList.length})</Text>

                    <Flex flexDirection="column" gap={2} marginTop={4}>

                        {categoryFetchLoading
                            ? Array.from({ length: 3 }).map((_, index) => (
                                <Skeleton key={`skeleton_${index}`} height={10} borderRadius={8} startColor="gray.200" endColor="gray.300" />
                            ))
                            : categoryList.map((category) => (
                                <StyledButton
                                    key={category.id}
                                    background="gray.100"
                                    boxShadow="none"
                                    color="gray.800"
                                    _hover={{
                                        background: 'gray.200'
                                    }}
                                    paddingTop={0}
                                    paddingBottom={0}
                                >
                                    {category.name}
                                </StyledButton>
                            )
                        )}
                    </Flex>
                </Flex>

                {groupFetchLoading ? (
                    <Spinner size='lg' margin="auto" color="blue.600" thickness="3px" />
                ) : (
                    <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4}>
                        {groupList.map((group) => (
                            <GridItem key={group.id} maxWidth={400}>
                                <GroupCard
                                    data={group}
                                    variant="vertical"
                                />
                            </GridItem>
                        ))}
                    </Grid>
                )}
            </Flex>
        </Flex>
    )
}
