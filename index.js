// Add Express
const express = require("express");
const cors = require('cors');
// Initialize Express
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
// Create GET request
app.get("/", (req, res) => {
  res.send({
      data: 'success'
  });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
module.exports = app;