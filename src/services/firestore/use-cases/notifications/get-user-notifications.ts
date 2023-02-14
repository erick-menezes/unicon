import { Notification } from "../../../database/entities/notification";

import { FirestoreNotificationRepository } from "../../repositories/firestore-notification-repository";

interface GetUserNotificationsResponse {
    notifications: Notification[] | null;
}

const firestoreNotificationRepository = new FirestoreNotificationRepository();

export async function getUserNotifications(): Promise<GetUserNotificationsResponse> {
    const notifications = await firestoreNotificationRepository.findByUserGroupId();

    return { notifications };
}
