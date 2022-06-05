import * as functions from "firebase-functions";

export const makeUppercaseHandler = async (
  snapshot: functions.firestore.QueryDocumentSnapshot,
  context: functions.EventContext
) => {
  const original: string = snapshot.data().original;

  functions.logger.log("Uppercasing", context.params.documentId, original);

  const uppercase = original.toUpperCase();

  return snapshot.ref.set({ uppercase }, { merge: true });
};
