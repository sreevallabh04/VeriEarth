const fetch = require('node-fetch');

const fetchData = async (req, res, next) => {
  try {
    // Replace with your data fetching logic
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    req.data = data;
    next();
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
};

module.exports = fetchData;
