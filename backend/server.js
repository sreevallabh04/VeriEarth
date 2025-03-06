const express = require('express');
const cors = require('cors');
const fetchData = require('./middleware');

const app = express();
const port = 3001;

app.use(cors());

app.get('/data', fetchData, (req, res) => {
  res.json(req.data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
