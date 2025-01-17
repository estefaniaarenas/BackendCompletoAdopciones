const mongoose = require("mongoose");
const { Schema } = mongoose;

const mascotasSchema = new Schema({
  nombre: String,
  especie: String,
  sexo: String,
  raza: String,
  estadoDeEsterilizacion: Boolean,
  estadoDeVacunacion: Boolean,
  descripcionDeLaMascota: String,
  fechaDeNacimiento: String,
  idusuario: { type: Schema.Types.ObjectId, ref: "usuarios" },
  imagen: String,
  //idusuario: String,
  date: { type: Date, default: Date.now },
});

// const mascotasSchema = new Schema({
//   nombre: String,
//   edad: String,
//   especie: String,
//   raza: String,
//   tamano: String,
//   idusuario: { type: Schema.Types.ObjectId, ref: "usuario" },
//   imagen: String,
//   date: { type: Date, defaut: Date.now },
//   activo: { type: Boolean, default: true },
// });

module.exports = mongoose.model("mascotas", mascotasSchema);
