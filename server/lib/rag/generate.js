import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({});

const sessions = new Map();
const chatMap = new Map();
const timeoutMs = 60 * 60 * 1000; 

const getSession = (userId) => {
  if (!sessions.has(userId)) {
    sessions.set(userId, { _timeout: null });
  }
  return sessions.get(userId);
};

const getOrCreateChat = async (userId) => {
  if (!chatMap.has(userId)) {
    const systemPrompt = `
You are Mudia Zuwa's AI portfolio assistant.
Use the context given to answer accurately and concisely.
If unsure, say you don't know.
Important rules:
1. Do not use bold, italics, asterisks (**), underscores (_), backticks (\`), or any other text formatting in your replies.
2. Always write in plain text only.
`;

    const chat = await genAI.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: { parts: [systemPrompt] },
      },
    });
    chatMap.set(userId, chat);
  }

  setChatTimeout(userId);
  return chatMap.get(userId);
};

const setChatTimeout = (userId) => {
  const session = sessions.get(userId);

  if (session?._timeout) {
    clearTimeout(session._timeout);
    session._timeout = null;
  }

  const chatSession = chatMap.get(userId);

  if (chatSession?._timeout) {
    clearTimeout(chatSession._timeout);
    chatSession._timeout = null;
  }

  chatSession._timeout = setTimeout(() => {
    chatMap.delete(userId);
  }, timeoutMs);
};

export const generateAnswer = async (context, query, userId, onToken) => {
  getSession(userId);
  const chat = await getOrCreateChat(userId);

  const prompt = `
Context:
${context}

User: ${query}
`;

  const responseStream = await chat.sendMessageStream({ message: prompt });

  for await (const chunk of responseStream.stream) {
    const token = chunk.text();
    if (token && onToken) onToken(token);
  }
};
