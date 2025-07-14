import request from "supertest";
import app from "../src/server.js";
import { describe, it, expect } from "vitest";


describe("GET /ping", () => {
  it("should respond with 'pong'", async () => {
    const response = await request(app).get("/ping");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("pong");
  });
})