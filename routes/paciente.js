import express from "express";

import {
  getPacientes,
  createPaciente,
  updatePaciente,
  deletePaciente,
} from "../controllers/paciente.js";

const router = express.Router();

router.get("/", getPacientes); // get para obtener los pacientes
router.post("/", createPaciente); // post para crear un paciente
router.patch("/:id", updatePaciente); //patch para actualizar documentos existentes
router.delete("/:id", deletePaciente); // delete para eliminar un paciente

export default router;
