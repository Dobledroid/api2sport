import express from "express";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/products.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Manejo de la ruta raíz
app.get("/", (req, res) => {
    res.send("¡Hola, este es mi servidor API!");
});

app.get("/api", (req, res) => {
    res.send("¡APIw!");
});

app.get("/users", (req, res) => {
    res.send("Obteniendo información del usuario!");
});
  
// Routes
app.use("/api", productRoutes);

export default app;
