import { MutableRefObject, useState } from "react";

import { StyledButton } from "../../commons/StyledButton";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Heading } from "@chakra-ui/react";

import { PostInputSection } from "./components/PostInputSection";

import { MultiValue } from 'react-select';

import { FormEvent } from 'react';
import { sendPost } from "../../../services/firestore/use-cases/posts/sendPost";


interface PostDialogProps {
    onClose: () => void;
    isOpen: boolean;
    cancelRef: MutableRefObject<null>
}

export interface SelectOptionData {
    label: string;
    value: string;
}

export function PostDialog({ onClose, isOpen, cancelRef }: PostDialogProps) {
    const [selectValue, setSelectValue] = useState<MultiValue<SelectOptionData[]>>([]);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const [loadingSendingPost, setLoadingSendingPost] = useState(false);

    async function sendPostToGroups(event: FormEvent) {
        try {
            setLoadingSendingPost(true);

            event.preventDefault();

            const postPreview = new DOMParser()
                                        .parseFromString(postContent, "text/html")
                                        .documentElement
                                        .textContent
                                        ?.split('.')[0] ?? null;

            await sendPost({
                postTitle,
                postContent,
                postPreview,
                groupIds: selectValue.flat().map((group) => group.value),
            });

            setSelectValue([]);
            setPostTitle('');
            setPostContent('');
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingSendingPost(false);
        }
    }

    return (
        <AlertDialog
            trapFocus={false}
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent background="white" maxWidth="1200px" paddingTop={4}>
                <AlertDialogHeader>
                    <Heading as="h3">Publicação rápida</Heading>
                </AlertDialogHeader>

                <form onSubmit={sendPostToGroups}>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        <PostInputSection
                            contentEditor={{
                                contentText: postContent,
                                onChangeContent: (data) => setPostContent(data)
                            }}
                            onChangeTitle={setPostTitle}
                            title={postTitle}
                            onChangeSelect={setSelectValue}
                            selectValue={selectValue}
                        />
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <StyledButton
                            maxWidth="200px"
                            margin="auto"
                            marginTop={12}
                            type="submit"
                            isLoading={loadingSendingPost}
                        >
                            Publicar post
                        </StyledButton>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
