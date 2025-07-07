const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const BACKEND_URL = process.env.BACKEND_URL;

app.get("/task", async (req, res) => {
  try {
    const result = await axios.get(`${BACKEND_URL}`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/task/:id", async (req, res) => {
  try {
    const result = await axios.get(`${BACKEND_URL}/${req.params.id}`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/task/status/:status", async (req, res) => {
  try {
    const result = await axios.get(`${BACKEND_URL}/status/${req.params.status}`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/task", async (req, res) => {
  try {
    const result = await axios.post(`${BACKEND_URL}`, req.body);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/task/:id", async (req, res) => {
  try {
    const result = await axios.put(`${BACKEND_URL}/${req.params.id}`, req.body);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const result = await axios.delete(`${BACKEND_URL}/${req.params.id}`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Router listening on port 5000");
});
