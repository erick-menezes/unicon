import { addDoc, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";

import { db } from "../schemas";

import { CreatePostProps, PostRepository } from "../../database/repositories/post-repository";

import { Post } from "../../database/entities/post";
import { Post as PostModel } from "../../database/models/post";
import { FirebasePostMapper } from "../mappers/post-mapper";
import { getAuth } from "firebase/auth";
import { FirebaseAuthError } from "../errors/FirebaseAuthError";

export class FirestorePostRepository implements PostRepository {
    private auth;

    constructor() {
        this.auth = getAuth();
    }

    async findAllEnabled(): Promise<Post[]> {
        const postSnapshot = await getDocs(
            query(
                db.posts,
                where("isDisabled", "==", false)
            )
        );

        const posts = postSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, }));

        return Promise.all(posts.map((post) => FirebasePostMapper.toDomain(post)));
    };

    async findById(postId: string): Promise<Post | null> {
        const postSnapshot = await getDoc(
            doc(
                db.posts,
                postId
            )
        )

        const post: PostModel = {
            ...postSnapshot.data()!,
            id: postSnapshot.id,
        };

        if (!post) {
            return null;
        }

        return FirebasePostMapper.toDomain(post);
    };

    async countByGroupId(groupId: string): Promise<number> {
        const posts = await getDocs(
            query(
                db.posts,
                where("groupId", "==", groupId ?? ''),
                where("isDisabled", "==", false)
            )
        ).then((postQuery) => postQuery.size);

        return posts;
    };

    async create(post: CreatePostProps): Promise<void> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            throw new FirebaseAuthError();
        }

        post.groupIds.forEach(async (groupId) => {
            await addDoc(
                db.posts,
                {
                    authorId: userId,
                    createdAt: serverTimestamp(),
                    groupId,
                    isDisabled: false,
                    postContent: post.postContent,
                    postTitle: post.postTitle,
                    postPreview: post.postPreview!,
                }
            );
        })
    };
}
