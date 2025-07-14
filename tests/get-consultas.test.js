import request from "supertest";
import app from "../src/server";
import { describe, it, expect } from "vitest";

describe("GET /consultas", () => {
  it("should return a list of consultations (empty or not)", async () => {
    const res = await request(app).get("/consultas");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
