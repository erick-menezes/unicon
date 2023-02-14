import { getAuth } from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import { Notification } from "../../database/entities/notification";
import { NotificationRepository } from "../../database/repositories/notification-repository";
import { FirebaseNotificationMapper } from "../mappers/notification-mapper";
import { db } from "../schemas";

export class FirestoreNotificationRepository implements NotificationRepository {
    private auth;

    constructor() {
        this.auth = getAuth();
    }

    async findByUserGroupId(): Promise<Notification[] | null> {
        const userToken = this.auth.currentUser?.uid;

        const userGroupsIds: string[] = await getDocs(
            query(
                db.groups,
                where(
                    "members",
                    "array-contains",
                    userToken
                )
            )
        ).then((query) => query.docs.map((group) => group.id));

        const rawNotifications = await getDocs(
            query(
                db.notifications,
                where(
                    "groupId",
                    "in",
                    userGroupsIds
                )
            )
        ).then((query) => query.docs.map((notification) => (
            {
                ...notification.data(),
                id: notification.id,
            }
        )));

        const notifications = Promise.all(
            rawNotifications.map((rawNotification) => FirebaseNotificationMapper.toDomain(rawNotification))
        );

        return notifications;
    };
}
