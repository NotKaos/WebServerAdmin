const express = require('express');
const app = express();

const root = require('./backend/routes/root')

const PORT = process.env.PORT || 3000;

app.use('/', root);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});