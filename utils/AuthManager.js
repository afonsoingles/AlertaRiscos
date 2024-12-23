import { Client, Account, ID, AppwriteException, Messaging, Avatars } from "react-native-appwrite";
import { APPWRITE_PROJECT_ID, REACT_APP_PROJECT_ID, REACT_APP_PLATFORM } from '@env';

let client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(APPWRITE_PROJECT_ID)
    .setPlatform(APPWRITE_PLATFORM);

let account = new Account(client);
let messaging = new Messaging(client);
let avatars = new Avatars(client);


export { messaging, account, avatars };
