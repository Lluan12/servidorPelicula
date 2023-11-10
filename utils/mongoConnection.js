const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:DEZiNJm9sSH5ZTYs@cluster0.gk1esno.mongodb.net/cine-db?retryWrites=true&w=majority").then(() => {
	console.log("Conexión a la base de datos establecida con éxito");
}).catch(err => {
	console.log("Error al conectar con la base de datos", err);
});