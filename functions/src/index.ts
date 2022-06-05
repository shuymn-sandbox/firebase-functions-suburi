import * as admin from "firebase-admin";

admin.initializeApp();

export { helloWorld, addMessage, makeUppercase } from "./functions";
