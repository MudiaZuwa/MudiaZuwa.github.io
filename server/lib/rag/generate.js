import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const LLM_URL = process.env.LLAMA_API_URL;
const API_KEY = process.env.API_KEY;

export const generateAnswer = async (context, query, userId) => {
  const prompt = `
You are Mudia Zuwa's AI portfolio assistant.
Use the context below to answer accurately and concisely.
If unsure, say you don't know.
Context:
${context}

User: ${query}
`;

  try {
    const response = await axios.post(
      `${LLM_URL}/chat/${`user-${userId}`}`,
      {
        message: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 60000,
      }
    );

    const reply = response.data.reply?.trim();
    let parsed;

    try {
      parsed = JSON.parse(reply);
    } catch {}

    return reply || "Sorry, I couldn't generate a response.";
  } catch (err) {
    console.error("❌ LLM error:", err.message);
    return {
      answer: "Sorry, I couldn't process that at the moment.",
    };
  }
};
