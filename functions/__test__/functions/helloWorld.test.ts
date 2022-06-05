import axios from "axios";
import fftest from "firebase-functions-test";
import { expect, describe, it, afterAll } from "@jest/globals";
import { config } from "../../src/config";

const test = fftest(config, "../../../service-account-key.json");

describe("helloWorld", () => {
  afterAll(() => {
    test.cleanup();
  });

  it("success", async () => {
    if (process.env.FIREBASE_API_HOST === undefined) {
      return;
    }

    const got = await axios.get(`${process.env.FIREBASE_API_HOST}/helloWorld`);
    expect(got.status).toEqual(200);
    expect(got.data).toEqual("Hello from Firebase!");
  });
});
