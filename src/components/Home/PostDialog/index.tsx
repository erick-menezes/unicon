import { MutableRefObject } from "react";

import { StyledButton } from "../../commons/StyledButton";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";

import { PostInputSection } from "./components/PostInputSection";

interface PostDialogProps {
    onClose: () => void;
    isOpen: boolean;
    cancelRef: MutableRefObject<null>
}

export function PostDialog({ onClose, isOpen, cancelRef }: PostDialogProps) {
    return (
        <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent background="white" maxWidth="700px">
                <form>
                    <AlertDialogCloseButton />
                    
                    <AlertDialogHeader fontSize='2xl' fontWeight='bold'>
                        Publicação rápida
                    </AlertDialogHeader>
                    
                    <AlertDialogBody>
                        <PostInputSection />
                    </AlertDialogBody>
                    
                    <AlertDialogFooter>
                        <StyledButton>
                            Publicar post                            
                        </StyledButton>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}