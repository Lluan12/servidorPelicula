const express = require('express');
const morgan = require('morgan');
const peliculasRouter = require('./routers/peliculas.router');
const usersRouter = require("./routers/users.router");
require('./utils/mongoConnection');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));
app.use('/peliculas', peliculasRouter);
app.use("/users", usersRouter);

app.listen(port, (req, res) => {
	console.log("Escuchando en el puerto 3000");
});