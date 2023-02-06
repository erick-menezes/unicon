import { Post } from "../../database/entities/post";
import { Post as PostModel } from "../../database/models/post";
import { User } from "../../database/models/user";
import { countPostLikes } from "../use-cases/posts/count-post-likes";
import { countPostViews } from "../use-cases/posts/count-post-views";
import { getPostInteractions } from "../use-cases/posts/get-post-interactions";
import { getUserAccount } from "../use-cases/users/get-user-account";

export class FirebasePostMapper {
    static async toDomain(post: PostModel): Promise<Post> {
        const { user: author } = await getUserAccount(post.authorId, 'authUID');
        const { likeAmount } = await countPostLikes(post?.id ?? '');
        const { viewAmount } = await countPostViews(post?.id ?? '');

        const interactions = await getPostInteractions(post.id!);

        return {
            ...post,
            author: author as User,
            createdAt: new Date(post.createdAt.seconds * 1000),
            likes: likeAmount,
            views: viewAmount,
            interactions,
        }
    }
}
