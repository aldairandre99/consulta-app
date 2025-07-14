import request from "supertest";
import app from "../src/server";
import { describe, it, expect } from "vitest";

describe("POST /consultas", () => {
  it("should add a new consultation", async () => {
    const newConsultation = {
      nome: "Carlos Alberto",
      data: "2025-07-20",
      horario: "14:30"
    };

    const res = await request(app)
      .post("/consultas")
      .send(newConsultation)
      .set("Content-Type", "application/json");

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message", "Consulta agendada!");
    expect(res.body.consulta).toMatchObject(newConsultation);
  });
});
