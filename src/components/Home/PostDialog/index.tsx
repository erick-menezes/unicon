import { MutableRefObject } from "react";

import { StyledButton } from "../../commons/StyledButton";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay } from "@chakra-ui/react";

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

            <AlertDialogContent background="white" maxWidth="1200px" paddingTop={16}>
                <form>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        <PostInputSection />
                    </AlertDialogBody>
                    
                    <AlertDialogFooter>
                        <StyledButton maxWidth="200px" margin="auto" marginTop={6}>
                            Publicar post                            
                        </StyledButton>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}