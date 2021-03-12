import mongoose from "mongoose";
import Paciente from "../models/Paciente.js";

//Controlador para obtener todos los pacientes de la base de datos
export const getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    console.log(pacientes);
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Controlador para obtener un paciente de la base de datos
export const getSinglePaciente = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No existe ningun paciente con ese id");
  try {
    const paciente = await Paciente.findById(id);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Controlador para crear un nuevo paciente
//Se requiere en el  body el objeto JSON con los datos
export const createPaciente = async (req, res) => {
  const paciente = req.body;
  const newPaciente = new Paciente(paciente);
  try {
    await newPaciente.save();
    res.status(201).json(newPaciente);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//Controlador para actualizar un paciente
//Se requiere en el  body el objeto JSON con los nuevos datos
// De la URL se obtiene el id del paciente
export const updatePaciente = async (req, res) => {
  const { id: _id } = req.params;
  const paciente = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No existe ningun paciente con ese id");

  const updatedPaciente = await Paciente.findByIdAndUpdate(
    _id,
    { ...paciente, _id },
    {
      new: true,
    }
  );
  res.json(updatedPaciente);
};

//Controlador para eliminar un paciente
// De la URL se obtiene el id del paciente a eliminar
export const deletePaciente = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No existe ningun paciente con ese id");

  await Paciente.findByIdAndRemove(id);
  res.json({ message: "Paciente eliminado exitosamente" });
};
