import mongoose from "mongoose";
//mongo crea automaticamente un id, en este caso no se necesita crear el id de paciente
const pacienteSchema = mongoose.Schema({
  id_doctor: Number,
  nombre: String,
  telefono: String,
  direccion: String,
});

// se crea la tabla de la base de datos con el esquema definido
const Medikapp = mongoose.model("Paciente", pacienteSchema);

export default Medikapp;
