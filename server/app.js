const express = require("express");

const app = express();
app.get("/api/v1", (req, res) => {
  return res.json({
    success: true,
  });
});
const port = 4500;
app.listen(port, () => {
  console.log("Server is running on: " + port);
});
