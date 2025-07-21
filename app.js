const express = require('express');
const cowsay = require('cowsay');

const app = express();
const port =  3000;

// Rutas
const filmsRoutes = require('./routes/films');

//Middleware para convertir a json la informacion
app.use(express.json());  // Para parsear el body entrante a JSON

// En el futuro esto será mi "base de datos"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Rutas //Api
app.use('/api/film', filmsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Film not found' });
});

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:3000`,
      f: "nyan",
    })
  );
});

module.exports = app;