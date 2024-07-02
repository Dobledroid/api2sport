import { app } from "./app.js";
import { PORT } from "./config.js"; // Importar el puerto desde config.js

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
