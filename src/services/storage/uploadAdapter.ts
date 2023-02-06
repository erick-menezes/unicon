import { FileLoader } from "@ckeditor/ckeditor5-upload/src/filerepository";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from ".";

export default class FirebaseUploadAdapter {
    loader: FileLoader;
    userAuthId: string;

    constructor(loader: FileLoader, userAuthId: string) {
        this.loader = loader;
        this.userAuthId = userAuthId;
    }

    abort(): void {
        throw new Error("Could not storage the data. Try again.");
    }

    async upload() {
        return this.loader.file.then(file => new Promise(async (resolve, reject) => {
            const fileArrayBuffer = await file?.arrayBuffer()!;
            const storageRef = ref(storage, `content/${file?.lastModified}-${this.userAuthId}`);

            let uploadTask = uploadBytesResumable(storageRef, fileArrayBuffer);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");

                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case "storage/unauthorized":
                            reject(" User doesn't have permission to access the object");
                            break;

                        case "storage/canceled":
                            reject("User canceled the upload");
                            break;

                        case "storage/unknown":
                            reject(
                                "Unknown error occurred, inspect error.serverResponse"
                            );
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);

                        resolve({
                            default: downloadURL
                        });
                    });
                }
              );
            })
        ) as Promise<Record<string, string>>;
    }
}
