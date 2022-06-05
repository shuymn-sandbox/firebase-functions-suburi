import * as functions from "firebase-functions";
import { addMessageHandler } from "../../handlers";

export const addMessage = functions.https.onRequest(addMessageHandler);
