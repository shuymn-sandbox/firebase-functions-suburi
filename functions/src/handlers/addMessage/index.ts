import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const addMessageHandler = async (
  req: functions.https.Request,
  resp: functions.Response<{ result: string }>
): Promise<void> => {
  const original = req.query.text;
  if (original === undefined) {
    resp.status(400).json({ result: "required query: text" });
    return;
  }

  const writeResult = await admin
    .firestore()
    .collection("messages")
    .add({ original: original });
  resp.json({ result: `Message with ID: ${writeResult.id} added.` });
};
