import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAnswer = async (context, query, userId, onToken) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are Mudia Zuwa's AI portfolio assistant.
Use the context below to answer accurately and concisely.
If unsure, say you don't know.
Context:
${context}

User: ${query}
`;

  const stream = await model.generateContentStream(prompt);
  for await (const chunk of stream.stream) {
    const token = chunk.text();
    if (token && onToken) onToken(token);
  }
};
