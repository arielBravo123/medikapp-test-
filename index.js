import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import pacientesRutas from "./routes/paciente.js";

const app = express();
//para las variables de entorno
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/pacientes", pacientesRutas);

//para el deploy(mensaje que se verá en la página principal)
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de Pacientes");
});
const PORT = process.env.PORT || 5000;

//THEN <- CUANDO SE CONECTA SIN ERRORES
//nos conectamos a la base de datos
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
