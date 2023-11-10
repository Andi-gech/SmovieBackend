const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();
app.use(cors());
const API_URL = "https://vidsrc.to/vapi/movie/new/2";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/:type/new", async (req, res) => {
  try {
    const response = await axios.get(
      `https://vidsrc.to/vapi/${req.params.type}/new/1`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ type: "error", message: error.message });
  }
});
app.get("/:type/add", async (req, res) => {
  try {
    const response = await axios.get(
      `https://vidsrc.to/vapi/${req.params.type}/add/1`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ type: "error", message: error.message });
  }
});

app.get("/details/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${req.params.id}&apikey=137680e0`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ type: "error", message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
