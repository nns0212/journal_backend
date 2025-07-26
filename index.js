const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let journalEntries = [];

// GET all journal entries
app.get("/api/journals", (req, res) => {
  res.json(journalEntries);
});

// POST a new journal entry
app.post("/api/journals", (req, res) => {
  const { mood, entry } = req.body;
  const newEntry = {
    _id: uuidv4(),
    mood,
    entry,
    date: new Date().toISOString(),
  };
  journalEntries.push(newEntry);
  res.status(201).json(newEntry);
});

// DELETE an entry
app.delete("/api/journals/:id", (req, res) => {
  const { id } = req.params;
  journalEntries = journalEntries.filter((e) => e._id !== id);
  res.json({ message: "Deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
