const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // If serving static HTML/CSS/JS

// MongoDB setup
mongoose
  .connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/journalDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Mongoose schema/model
const journalSchema = new mongoose.Schema({
  mood: String,
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Journal = mongoose.model("Journal", journalSchema);

// Routes
app.post("/api/journals", async (req, res) => {
  const entry = new Journal(req.body);
  const saved = await entry.save();
  res.json(saved);
});

app.get("/api/journals", async (req, res) => {
  const journals = await Journal.find().sort({ createdAt: -1 });
  res.json(journals);
});

app.delete("/api/journals/:id", async (req, res) => {
  await Journal.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
