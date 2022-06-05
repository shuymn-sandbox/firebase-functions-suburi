import * as functions from "firebase-functions";
import { makeUppercaseHandler } from "../../handlers";

export const makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate(makeUppercaseHandler);
