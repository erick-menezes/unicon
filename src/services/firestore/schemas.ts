import { dataPoint } from "./utils/type-converter";

import { Category } from "../database/models/category";
import { Group } from "../database/models/group";
import { Post } from "../database/models/post";
import { User } from "../database/models/user";
import { PostLike } from "../database/models/post-like";
import { PostSave } from "../database/models/post-save";
import { PostView } from "../database/models/post-view";
import { Role } from "../database/models/role";
import { Course } from "../database/models/course";

export const db = {
    posts: dataPoint<Post>('posts'),
    postLikes: dataPoint<PostLike>('post_likes'),
    postSaves: dataPoint<PostSave>('post_saves'),
    postViews: dataPoint<PostView>('post_views'),
    categories: dataPoint<Category>('categories'),
    groups: dataPoint<Group>('groups'),
    users: dataPoint<User>('users'),
    roles: dataPoint<Role>('roles'),
    courses: dataPoint<Course>('courses'),
}
