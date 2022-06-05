import * as functions from "firebase-functions";
import { helloWorldHandler } from "../../handlers";

export const helloWorld = functions.https.onRequest(helloWorldHandler);
