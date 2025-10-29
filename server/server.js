process.env.TRANSFORMERS_DISABLE_SHARP = "1";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { runRAGPipeline } from "./lib/rag/pipeline.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { query, userId } = req.body;

    if (!query) return res.status(400).json({ error: "Missing 'query'." });

    const answer = await runRAGPipeline(query, userId);
    console.log(answer)
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
