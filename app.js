const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
root = require('./backend/routes/root');

app.use('/', root);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});