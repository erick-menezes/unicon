import { Notification } from "../entities/notification";

export interface NotificationRepository {
    findByUserGroupId: () => Promise<Notification[] | null>;
}
