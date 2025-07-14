import express from "express";
const app = express();
app.use(express.json());

const consultas = [];
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/consultas", (req, res) => {
  res.json(consultas);
});

app.post("/consultas", (req, res) => {
  const consulta = req.body;
  consultas.push(consulta);
  res.status(201).json({ message: "Consulta agendada!", consulta });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
