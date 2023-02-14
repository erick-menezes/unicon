import { Notification as NotificationModel } from "../../database/models/notification";
import { Notification } from "../../database/entities/notification";
import { getPostDetails } from "../use-cases/posts/get-post-details";


export class FirebaseNotificationMapper {
    static async toDomain(rawNotification: NotificationModel): Promise<Notification> {
        const { post } = await getPostDetails(rawNotification.postId);

        return {
            ...rawNotification,
            id: rawNotification.id!,
            createdAt: new Date(rawNotification.createdAt.seconds * 1000),
            post: post!,
        }
    }
}
