import * as functions from "firebase-functions";

export const helloWorldHandler = (
  _: functions.https.Request,
  resp: functions.Response<string>
): void => {
  functions.logger.info("Hello logs!", { structuredData: true });
  resp.send("Hello from Firebase!");
};
