import { collection, QueryDocumentSnapshot, FirestoreDataConverter, WithFieldValue, DocumentData } from "firebase/firestore";
import { firestore } from "../../firestore";

const converter = <T>(): FirestoreDataConverter<T> => ({
    toFirestore: (data: WithFieldValue<T>) => data as DocumentData,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

export const dataPoint = <T>(collectionPath: string) => collection(firestore, collectionPath).withConverter(converter<T>());
