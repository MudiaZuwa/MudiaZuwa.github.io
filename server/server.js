process.env.TRANSFORMERS_DISABLE_SHARP = "1";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { runRAGPipeline } from "./lib/rag/pipeline.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { query, userId } = req.body;
    if (!query) return res.status(400).json({ error: "Missing 'query'." });
    console.log(query, userId)

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const sendToken = (token) => {
      res.write(`data: ${JSON.stringify({ token })}\n\n`);
    };

    await runRAGPipeline(query, userId, sendToken);

    res.write("event: done\ndata: {}\n\n");
    res.end();
  } catch (error) {
    console.error(error);
    res.write("event: error\ndata: {}\n\n");
    res.end();
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
