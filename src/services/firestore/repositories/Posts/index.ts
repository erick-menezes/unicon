import { db } from "../../../../services/firestore";
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, where } from "firebase/firestore";

import { UserRepository } from "../Users";

import { DatabasePostLikeDataType, DatabasePostViewDataType } from "./types";

class Post {
    public async index() {
        const allPosts = await getDocs(
            query(
                collection(db, "posts"),
                where("isDisabled", "==", false)
            )
        ).then((data) => {
            const posts = data.docs.map(async (post) => {
                const authorName = await UserRepository.show(post.data()?.authorId, "id");
                const likeQuantity = await this.getLikeQuantityByPostId(post.id);
                const viewQuantity = await this.getViewQuantityByPostId(post.id);
    
                return {
                    ...post.data(),
                    id: post.id,
                    author: authorName,
                    createdAt: new Date(post.data()?.createdAt?.seconds * 1000 ?? null),
                    likes: likeQuantity,
                    views: viewQuantity,
                }
            });

            return Promise.all(posts);
        });

        return allPosts;
    }

    public async getUserLike(postId: string, userId: string) {
        const postLiked = await getDocs(
            query(
                collection(db, "post_likes"),
                where("postId", "==", postId),
                where("userId", "==", userId)
            )
        ).then((data) => data.docs.map(post => post.id));

        return postLiked[0] ?? "";
    }

    public async getLikeQuantityByPostId(postId: string) {
        const likeQuantity = await getDocs(
            query(
                collection(db, "post_likes"),
                where("postId", "==", postId)
            )
        ).then((data) => data.docs.length);

        return likeQuantity ?? 0;
    }

    public async getViewQuantityByPostId(postId: string) {
        const viewQuantity = await getDocs(
            query(
                collection(db, "post_views"),
                where("postId", "==", postId)
            )
        ).then((data) => data.docs.length);

        return viewQuantity ?? 0;
    }

    public async removeUserLike(likeReference: string) {
        await deleteDoc(
            doc(db, "post_likes", likeReference)
        );
    }

    public async storeUserLike({ userId, postId }: DatabasePostLikeDataType) {
        const postLikeId = await addDoc(
            collection(db, "post_likes"),
            {
                userId,
                postId,
                likedAt: serverTimestamp(),
            }
        ).then(data => data.id);

        return postLikeId;
    }

    public async getUserView(postId: string, userId: string) {
        const postViewed = await getDocs(
            query(
                collection(db, "post_views"),
                where("postId", "==", postId),
                where("userId", "==", userId)
            )
        ).then((data) => data.docs.map(post => post.id));

        return postViewed[0];
    }

    public async storeUserView({ userId, postId }: DatabasePostViewDataType) {
        const postViewId = await addDoc(
            collection(db, "post_views"),
            {
                userId,
                postId,
                likedAt: serverTimestamp(),
            }
        ).then(data => data.id);

        return postViewId;
    }

    public async getUserSave(postId: string, userId: string) {
        const postSaved = await getDocs(
            query(
                collection(db, "post_saves"),
                where("postId", "==", postId),
                where("userId", "==", userId)
            )
        ).then((posts) => posts.docs.map(post => post.id));

        return postSaved[0] ?? "";
    };

    public async storeUserSave({ userId, postId }: DatabasePostViewDataType) {
        const postSaveId = await addDoc(
            collection(db, "post_saves"),
            {
                userId,
                postId,
                savedAt: serverTimestamp(),
            }
        ).then(data => data.id);

        return postSaveId;
    }

    public async removeUserSave(saveReference: string) {
        await deleteDoc(
            doc(db, "post_saves", saveReference)
        );
    }

    // public async show(...postTags: string[]) {
    //     const allPosts = await getDocs(
    //         collection(db, "posts")
    //     ).then((data) => data.docs.map((post) => post.data()));

    //     return allPosts;
    // }
}

export const PostRepository = new Post();
