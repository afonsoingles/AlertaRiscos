import { Client, Account, ID, AppwriteException, Messaging, Avatars } from "react-native-appwrite";

let client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("673cc35600008d984cad")
    .setPlatform("com.afonsoingles.alertariscos");

let account = new Account(client);
let messaging = new Messaging(client);
let avatars = new Avatars(client);


export { messaging, account, avatars };
