import * as admin from "firebase-admin";
import { config } from "./config";

admin.initializeApp(config);

export { helloWorld, addMessage, makeUppercase } from "./functions";
