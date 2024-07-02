import { app } from "./app.js";

const PORT = process.env.PORT || 3001; // Puerto por defecto 3001

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
