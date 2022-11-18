import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { Flex, Heading } from "@chakra-ui/react";
import { useAuth } from "../../contexts/auth";
import { PostRepository } from "../../services/firestore/repositories/Posts";

export function Post() {
    const isFirstTime = useRef(true);
    const { userAuthSession } = useAuth();
    const { postId } = useParams();
    const [viewId, setViewId] = useState('');

    useEffect(() => {
        if (isFirstTime.current) {
            isFirstTime.current = false;
            return; 
        }
        
        if (!viewId) {
            getViewFromUser();
        }
    }, []);

    async function getViewFromUser() {
        const userView = await PostRepository.getUserView(postId!, userAuthSession?.uid!);

        if (userView?.length) {
            return;
        }

        const newUserView = await PostRepository.storeUserView({ postId: postId!, userId: userAuthSession?.uid! });

        setViewId(newUserView);
    }

    return (
        <Flex>
            {/* {currentPost && (
                <Heading>{currentPost[0].title}</Heading>
            )} */}
        </Flex>
    );
}