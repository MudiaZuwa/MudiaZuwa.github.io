import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Mudia Zuwa's AI portfolio assistant.
Use the context given to answer accurately and concisely.
If unsure, say you don't know.
Important rules:
1. Do not use bold, italics, asterisks (**), underscores (_), backticks (\`), or any other text formatting in your replies.
2. Always write in plain text only.`;

// Store conversation history per user
const conversationHistory = new Map();
const timeoutMs = 60 * 60 * 1000; // 1 hour

const getOrCreateHistory = (userId) => {
  if (!conversationHistory.has(userId)) {
    conversationHistory.set(userId, {
      messages: [],
      _timeout: null,
    });
  }
  return conversationHistory.get(userId);
};

const setChatTimeout = (userId) => {
  const history = conversationHistory.get(userId);

  if (history?._timeout) {
    clearTimeout(history._timeout);
    history._timeout = null;
  }

  history._timeout = setTimeout(() => {
    conversationHistory.delete(userId);
  }, timeoutMs);
};

export const generateAnswer = async (context, query, userId, onToken) => {
  const history = getOrCreateHistory(userId);
  setChatTimeout(userId);

  const userMessage = `Context:
${context}

User: ${query}`;

  // Build messages array with system prompt, history, and new user message
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.messages,
    { role: "user", content: userMessage },
  ];

  const stream = await groq.chat.completions.create({
    messages,
    model: "llama-3.3-70b-versatile",
    temperature: 0.5,
    max_completion_tokens: 1024,
    stream: true,
  });

  let fullResponse = "";

  for await (const chunk of stream) {
    const token = chunk.choices[0]?.delta?.content;
    if (token) {
      fullResponse += token;
      if (onToken) onToken(token);
    }
  }

  history.messages.push(
    { role: "user", content: userMessage },
    { role: "assistant", content: fullResponse }
  );

  if (history.messages.length > 20) {
    history.messages = history.messages.slice(-20);
  }
};
