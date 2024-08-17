const kodersUseCase = require("./koders");
const express = require("express");
const server = express();
const db = require("./db");

db.init();

server.use(express.json());

server.get("/koders", (request, response) => {
  const koders = kodersUseCase.getAll();
  response.json({
    success: true,
    data: {
      koders,
    },
  });
});

server.post("/koders", (request, response) => {
  const { name } = request.body;
  const koders = kodersUseCase.add(name);

  response.status(201).json({
    success: true,
    data: {
      koders,
    },
  });
});

server.delete("/koders/:name", (request, response) => {
  const { name } = request.params;
  const newKoders = kodersUseCase.remove(name);
  response.json({
    message: "Koder deleted",
    success: true,
    data: {
      koders: newKoders,
    },
  });
});

server.delete("/koders", (request, response) => {
  kodersUseCase.removeAll();
  response.json({
    message: "Koders deleted",
    success: true,
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
